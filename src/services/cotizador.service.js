import catalogo from "../config/catalogo.json" with { type: "json" };
import precios from "../config/precios.json" with { type: "json" };

const CLASIFICACION = {
  basico: 1,
  smart: 2,
  elite: 3,
  platinum: 4
};

// Reglas iniciales
const REGLAS = {
  decoracion: {
    clasica: "basico",
    organica: "smart",
    follaje: "elite",
    impresionVinil: "elite",
    impresionPolipropileno: "platinum"
  },

  globo: {
    latexSencillo: "basico",
    latexDoble: "elite"
  },

  tono: {
    mate: "basico",
    mateReflex: "smart",
    metalico: "elite",
    cromado: "platinum",
    transparenteConfetti: "elite"
  }
};

export function calcularCotizacion(datos) {

  const niveles = [];

  niveles.push(REGLAS.decoracion[datos.decoracion]);
  niveles.push(REGLAS.globo[datos.globo]);
  niveles.push(REGLAS.tono[datos.tono]);

  let nivelFinal = "basico";
  let valorMaximo = 1;

  for (const nivel of niveles) {

    const valor = CLASIFICACION[nivel];

    if (valor > valorMaximo) {
      valorMaximo = valor;
      nivelFinal = nivel;
    }
  }

  const precio =
    precios.estructuras[datos.estructura]?.[nivelFinal]?.precioBase || 0;

  return {
    estructura: datos.estructura,
    nivel: nivelFinal,
    precio,
    moneda: precios.configuracion.moneda
  };
}