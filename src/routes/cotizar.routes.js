import express from "express";
import { calcularCotizacion } from "../services/cotizador.service.js";
import { generarPropuestaComercial } from "../services/foundry.service.js";

const router = express.Router();

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
    const propuestaComercial = await generarPropuestaComercial(cotizacion);

    res.json({
      ...cotizacion,
      propuestaComercial,
      errorPropuesta: null
    });
  } catch (error) {
    res.json({
      ...cotizacion,
      propuestaComercial: null,
      errorPropuesta: error.message
    });
  }

});

export default router;