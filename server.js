import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import cotizarRoutes from "./src/routes/cotizar.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use("/api/cotizar", cotizarRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    servicio: "cotizador-globos-ia",
    version: "1.0.0"
  });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor iniciado en http://localhost:${PORT}`);
});