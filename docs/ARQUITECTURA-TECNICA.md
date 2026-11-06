# Arquitectura Técnica
# Asistente Inteligente para Cotización de Decoraciones con Globos

---

# 1. Objetivo Técnico

Desarrollar una aplicación web basada en Node.js y Microsoft Foundry que permita generar propuestas comerciales y cotizaciones para decoraciones con globos mediante un catálogo configurable y agentes especializados.

---

# 2. Arquitectura General

Frontend
↓
Node.js + Express
↓
Servicios de Negocio
↓
Catálogo Comercial
↓
Microsoft Foundry
↓
Agentes Especializados
↓
SQLite
↓
Documentos Word

---

# 3. Tecnologías

Frontend

- HTML5
- CSS3
- JavaScript

Backend

- Node.js
- Express

Base de Datos

- SQLite

IA

- Microsoft Foundry
- GPT-5-mini

Documentos

- docx

Control de Versiones

- Git
- GitHub

Despliegue

- Azure App Service

---

# 4. Estructura del Proyecto

proyecto-cotizador-ia/

├── .github/
│
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── index.html
│
├── src/
│
│   ├── config/
│   │   ├── catalogo.json
│   │   ├── precios.json
│   │   └── settings.json
│   │
│   ├── routes/
│   │   ├── clientes.routes.js
│   │   ├── cotizaciones.routes.js
│   │   ├── catalogo.routes.js
│   │   └── ai.routes.js
│   │
│   ├── controllers/
│   │
│   ├── services/
│   │   ├── catalogo.service.js
│   │   ├── cotizacion.service.js
│   │   ├── foundry.service.js
│   │   ├── documentos.service.js
│   │   └── historial.service.js
│   │
│   ├── agents/
│   │   ├── clasificador.agent.md
│   │   ├── redactor.agent.md
│   │   ├── cotizador.agent.md
│   │   └── arquitecto.agent.md
│   │
│   ├── database/
│   │   ├── db.js
│   │   └── schema.sql
│
├── templates/
│   └── contrato.docx
│
├── docs/
│   ├── PROYECTO-COTIZADOR-IA.md
│   └── ARQUITECTURA-TECNICA.md
│
├── server.js
└── package.json

---

# 5. Arquitectura de Agentes

La solución utilizará varios agentes especializados.

Cada agente tendrá una responsabilidad específica.

---

# Agente 1
# Arquitecto

Objetivo:

Ayudar durante el desarrollo.

Responsabilidades:

- Revisar arquitectura.
- Generar planes.
- Proponer mejoras.
- Apoyar decisiones técnicas.

Uso:

GitHub Copilot.

---

# Agente 2
# Clasificador

Nombre:

clasificador-decoraciones

Objetivo:

Analizar las características seleccionadas
por el decorador.

Entradas:

- Tipo de decoración.
- Tipo de globos.
- Extras.
- Comentarios.

Salida:

- Nivel recomendado.
- Justificación.

Ejemplo:

Nivel recomendado: Platinum.

Motivo:

Contiene follaje, confetti y decoración extra.

---

# Agente 3
# Redactor Comercial

Nombre:

redactor-comercial

Objetivo:

Generar texto profesional.

Entradas:

- Información del evento.
- Tipo de decoración.
- Nivel.
- Extras.

Salida:

- Resumen ejecutivo.
- Propuesta comercial.
- Observaciones.
- Alcance.

---

# Agente 4
# Generador de Contratos

Nombre:

generador-contratos

Objetivo:

Preparar información para documentos Word.

Entradas:

- Datos cliente.
- Cotización.
- Propuesta.

Salida:

- Datos estructurados para plantilla.

---

# 6. Catálogo Comercial

Se almacenará fuera del código.

Archivo:

catalogo.json

Responsabilidad:

- Decoraciones
- Paquetes
- Extras
- Reglas

---

# 7. Configuración de Precios

Archivo:

precios.json

Responsabilidad:

- Precios base
- Precio extras
- Transporte
- Ayudante
- Porcentaje intermediario

Ejemplo:

{
  "porcentajeIntermediario": 35
}

---

# 8. Flujo de Cotización

Cliente comparte referencias
↓
Decorador analiza referencias
↓
Llena formulario
↓
Sistema obtiene características
↓
Clasificador determina nivel
↓
Motor de cotización calcula costo
↓
Redactor comercial genera propuesta
↓
Sistema genera cotización
↓
Sistema genera Word
↓
Guardar historial

---

# 9. Base de Datos

Tabla clientes

- id
- nombre
- telefono
- correo

Tabla cotizaciones

- id
- cliente_id
- fecha_evento
- tipo_decoracion
- nivel
- precio_total
- propuesta
- fecha_creacion

Tabla historial

- id
- cotizacion_id
- fecha_modificacion
- comentarios

---

# 10. API

POST /api/cotizar

Genera cotización.

POST /api/propuesta

Genera propuesta comercial.

GET /api/catalogo

Obtiene catálogo.

GET /api/cotizaciones

Consulta historial.

GET /api/cotizacion/:id

Detalle.

POST /api/documento

Genera documento.

---

# 11. MVP

Versión 1

✅ Formulario

✅ Catálogo

✅ Cotización

✅ Foundry

✅ Propuesta Comercial

Versión 2

✅ Historial

✅ SQLite

✅ Contrato Word

Versión 3

✅ Análisis de imágenes

✅ Clasificación automática

✅ Dashboard

---

# 12. Decisiones Técnicas

Los precios nunca estarán embebidos en el código.

La IA nunca inventará precios.

La IA utilizará únicamente información enviada por el sistema.

Toda regla comercial deberá residir en:

- catalogo.json
- precios.json

La aplicación deberá seguir el principio:

Configuración > Código