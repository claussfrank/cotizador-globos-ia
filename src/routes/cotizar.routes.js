import express from "express";
import catalogo from "../config/catalogo.json" with { type: "json" };
import precios from "../config/precios.json" with { type: "json" };
import { calcularCotizacion } from "../services/cotizador.service.js";
import { generarDocumentoPropuesta } from "../services/documento.service.js";
import { generarPropuestaComercial } from "../services/foundry.service.js";

const router = express.Router();

router.post("/documento", async (req, res) => {
  const { estructura, decoracion, globo, tono, canalVenta, extras, propuestaComercial } =
    req.body ?? {};
  const opcionesValidas = [
    catalogo.estructuras.some((opcion) => opcion.id === estructura),
    catalogo.decoraciones.includes(decoracion),
    catalogo.globos.includes(globo),
    catalogo.tonos.includes(tono),
    catalogo.canalesVenta.includes(canalVenta)
  ];

  if (
    opcionesValidas.includes(false) ||
    !Array.isArray(extras) ||
    new Set(extras).size !== extras.length ||
    extras.some((extra) => typeof extra !== "string" || !precios.extras[extra]?.activo) ||
    typeof propuestaComercial !== "string" ||
    !propuestaComercial.trim()
  ) {
    res.status(400).json({ error: "Los datos de la propuesta no son válidos." });
    return;
  }

  let cotizacion;
  try {
    cotizacion = calcularCotizacion({ estructura, decoracion, globo, tono });
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  const extrasConPrecio = extras.map((extra) => ({
    nombre: extra,
    precio: precios.extras[extra].precio
  }));
  const totalExtras = extrasConPrecio.reduce((total, extra) => total + extra.precio, 0);
  const incrementoIntermediario = canalVenta === "intermediario"
    ? Math.round(
        (cotizacion.precio + totalExtras) *
          (precios.configuracion.porcentajeIntermediario / 100)
      )
    : 0;

  try {
    const documento = await generarDocumentoPropuesta({
      estructura,
      decoracion,
      globo,
      tono,
      canalVenta,
      extras: extrasConPrecio,
      nivel: cotizacion.nivel,
      precioBase: cotizacion.precio,
      moneda: cotizacion.moneda,
      totalExtras,
      incrementoIntermediario,
      totalFinal: cotizacion.precio + totalExtras + incrementoIntermediario,
      propuestaComercial: propuestaComercial.trim()
    });

    res
      .type("application/vnd.openxmlformats-officedocument.wordprocessingml.document")
      .attachment("propuesta-cotizacion.docx")
      .send(documento);
  } catch (error) {
    res.status(500).json({
      error: `No fue posible generar el documento de la propuesta: ${error.message}`
    });
  }
});

router.post("/", async (req, res) => {
  let cotizacion;

  try {
    cotizacion = calcularCotizacion(req.body);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
    return;
  }

  try {
    const propuestaComercial = await generarPropuestaComercial({
      estructura: cotizacion.estructura,
      decoracion: req.body.decoracion,
      globo: req.body.globo,
      tono: req.body.tono,
      extras: req.body.extras ?? [],
      canalVenta: req.body.canalVenta,
      nivel: cotizacion.nivel,
      precio: cotizacion.precio,
      moneda: cotizacion.moneda
    });

    res.json({
      ...cotizacion,
      propuestaComercial,
      errorPropuesta: null
    });
  } catch (error) {

  console.error("FOUNDRY ERROR:");
  console.error(error);
  console.error(error?.message);
  console.error(error?.stack);

  res.json({
    ...cotizacion,
    propuestaComercial: null,
    errorPropuesta: error.message
  });
}

});

export default router;