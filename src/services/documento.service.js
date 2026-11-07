import {
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun
} from "docx";
import catalogo from "../config/catalogo.json" with { type: "json" };

const etiquetas = {
  decoracion: {
    clasica: "Clásica",
    organica: "Orgánica",
    follaje: "Follaje",
    impresionVinil: "Impresión en vinil",
    impresionPolipropileno: "Impresión en polipropileno"
  },
  globo: {
    latexSencillo: "Látex sencillo",
    latexDoble: "Látex doble"
  },
  tono: {
    mate: "Mate",
    mateReflex: "Mate y reflex",
    cromado: "Cromado",
    metalico: "Metálico",
    transparenteConfetti: "Transparente con confeti"
  },
  canalVenta: {
    directo: "Directo",
    intermediario: "Intermediario"
  },
  nivel: {
    basico: "Básico",
    smart: "Smart",
    elite: "Elite",
    platinum: "Platinum"
  },
  extras: {
    transporte: "Transporte",
    ayudanteExtra: "Ayudante extra",
    horaExtra: "Hora extra"
  }
};

function formatoMoneda(monto, moneda) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: moneda,
    maximumFractionDigits: 0
  }).format(monto);
}

function campo(etiqueta, valor) {
  return new Paragraph({
    children: [
      new TextRun({ text: `${etiqueta}: `, bold: true }),
      new TextRun(valor)
    ]
  });
}

export async function generarDocumentoPropuesta(datos) {
  const estructura =
    catalogo.estructuras.find((opcion) => opcion.id === datos.estructura)?.nombre ??
    datos.estructura;
  const moneda = datos.moneda;
  const formato = (monto) => formatoMoneda(monto, moneda);
  const children = [
    new Paragraph({
      text: catalogo.nombreProyecto,
      heading: HeadingLevel.TITLE
    }),
    new Paragraph(`Fecha: ${new Date().toLocaleDateString("es-MX")}`),
    new Paragraph({
      text: "Detalles de la cotización",
      heading: HeadingLevel.HEADING_1
    }),
    campo("Estructura", estructura),
    campo("Decoración", etiquetas.decoracion[datos.decoracion]),
    campo("Tipo de globo", etiquetas.globo[datos.globo]),
    campo("Tono", etiquetas.tono[datos.tono]),
    campo("Canal de venta", etiquetas.canalVenta[datos.canalVenta]),
    campo(
      "Extras",
      datos.extras.length
        ? datos.extras.map((extra) => etiquetas.extras[extra.nombre]).join(", ")
        : "Sin extras"
    ),
    campo("Nivel", etiquetas.nivel[datos.nivel]),
    campo("Precio base", formato(datos.precioBase)),
    new Paragraph({
      text: "Incrementos",
      heading: HeadingLevel.HEADING_2
    }),
    ...(datos.extras.length
      ? datos.extras.map((extra) =>
          campo(etiquetas.extras[extra.nombre], `+${formato(extra.precio)}`)
        )
      : [campo("Extras", formato(0))]),
    campo("Incremento intermediario", `+${formato(datos.incrementoIntermediario)}`),
    campo("Total de incrementos", formato(datos.totalExtras + datos.incrementoIntermediario)),
    campo("Total final", formato(datos.totalFinal)),
    new Paragraph({
      text: "Propuesta Comercial IA",
      heading: HeadingLevel.HEADING_1
    }),
    ...datos.propuestaComercial
      .split(/\r?\n/)
      .filter((linea) => linea.trim())
      .map((linea) => new Paragraph(linea))
  ];

  const documento = new Document({
    sections: [{ children }]
  });

  return Packer.toBuffer(documento);
}
