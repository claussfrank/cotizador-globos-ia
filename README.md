🎈 Cotizador Inteligente para Decoración con Globos

Sistema inteligente para la generación de cotizaciones y propuestas comerciales mediante reglas de negocio e Inteligencia Artificial utilizando Microsoft Azure AI Foundry.

📋 Descripción

Este proyecto fue desarrollado para automatizar el proceso de cotización de una empresa dedicada a la decoración con globos.

La solución permite:

Calcular automáticamente el nivel de servicio.
Calcular automáticamente el precio de la propuesta.
Aplicar extras y costos adicionales.
Gestionar cotizaciones para clientes directos e intermediarios.
Generar propuestas comerciales utilizando Inteligencia Artificial.
Mantener separadas las reglas de negocio y la IA.
🚀 Características principales

✅ Motor de reglas de negocio

✅ Catálogo configurable mediante JSON

✅ Cálculo automático de niveles

✅ Cálculo automático de precios

✅ Gestión de extras

✅ Gestión de intermediarios

✅ API REST con Express.js

✅ Integración con Microsoft Azure AI Foundry

✅ Agente especializado para propuestas comerciales

✅ Interfaz web responsive

✅ Arquitectura desacoplada

🏗️ Arquitectura
Plain Text
Usuario
│
▼
Frontend (HTML, CSS, JavaScript)
│
▼
Express.js
│
▼
Motor de Reglas
│
▼
Catálogo + Precios
│
▼
Azure AI Foundry
│
▼
Agente cotizador-globos-ia
│
▼
Propuesta Comercial
🧠 Principios de diseño

El proyecto fue construido bajo una regla fundamental:

La Inteligencia Artificial NO calcula precios.

La IA tampoco:

Determina paquetes.
Asigna niveles.
Modifica costos.
Aplica descuentos.
Altera reglas comerciales.

Las decisiones comerciales son realizadas exclusivamente por el motor de negocio.

La IA únicamente genera:

Propuestas comerciales.
Observaciones.
Texto para documentos.
Contenido para comunicación con clientes.
📁 Estructura del proyecto
Plain Text
cotizador-globos-ia/
 
├── public/
│ └── index.html
│
├── src/
│ ├── config/
│ │ ├── catalogo.json
│ │ └── precios.json
│ │
│ ├── routes/
│ │ └── cotizar.routes.js
│ │
│ ├── services/
│ │ ├── cotizador.service.js
│ │ └── foundry.service.js
│ │
│ └── database/
│
├── docs/
│ ├── PROYECTO-COTIZADOR-IA.md
│ ├── ARQUITECTURA-TECNICA.md
│ ├── REGLAS-NEGOCIO.md
│ ├── USER-STORIES.md
│ └── PROMPTS.md
│
├── .env.example
├── .gitignore
├── package.json
└── server.js
⚙️ Tecnologías utilizadas
Backend
Node.js
Express.js
Frontend
HTML5
CSS3
JavaScript
Inteligencia Artificial
Microsoft Azure AI Foundry
GPT-5-mini
Azure AI Projects SDK
Configuración
JSON
dotenv
Control de versiones
Git
GitHub
📚 Reglas de negocio

El sistema clasifica automáticamente las propuestas en:

Nivel	Clasificación
Básico	1
Smart	2
Elite	3
Platinum	4

La regla principal es:

Plain Text
El atributo con mayor nivel determina el nivel final.

Ejemplo:

Plain Text
Decoración = Smart
 
Globo = Elite
 
Tono = Platinum
 
Resultado = Platinum
💰 Cálculo de precios

Los precios son obtenidos desde:

Plain Text
src/config/precios.json

El cálculo considera:

Precio base
Extras
Canal de venta
Incremento para intermediarios

El motor de precios es la única fuente de verdad.

🤖 Integración con Azure AI Foundry

El proyecto utiliza un agente especializado:

Plain Text
cotizador-globos-ia

Su responsabilidad es generar:

Plain Text
Propuesta Comercial
Descripción del montaje
Observaciones comerciales
 

La IA recibe:

JSON
{
"estructura": "arco",
"nivel": "platinum",
"precio": 3900,
"moneda": "MXN"
}

Y responde:

Plain Text
Propuesta Comercial
 
Con gusto presentamos la propuesta...
🔐 Variables de entorno

Crear un archivo:

Plain Text
.env

Ejemplo:

Plain Text
env isn’t fully supported. Syntax highlighting is based on Plain Text.
FOUNDRY_PROJECT_ENDPOINT=https://tu-proyecto.services.ai.azure.com/api/projects/CotizadorIA
 
FOUNDRY_AGENT_NAME=cotizador-globos-ia
 
PORT=3000
📦 Instalación

Clonar el repositorio:

Shell
git clone https://github.com/claussfrank/cotizador-globos-ia.git

Entrar al proyecto:

Shell
cd cotizador-globos-ia

Instalar dependencias:

Shell
npm install
▶️ Ejecución

Modo desarrollo:

Shell
npm run dev

Modo producción:

Shell
npm start
❤️ Endpoint Health

Verificar que el servicio se encuentre disponible:

HTTP
GET /health

Respuesta:

JSON
{
"status": "ok",
"servicio": "cotizador-globos-ia",
"version": "1.0.0"
}
📡 Endpoint Cotización
HTTP
POST /api/cotizar

Ejemplo:

JSON
{
"estructura": "arco",
"decoracion": "organica",
"globo": "latexDoble",
"tono": "cromado"
}

Respuesta:

JSON
{
"estructura": "arco",
"nivel": "platinum",
"precio": 3900,
"moneda": "MXN",
"propuestaComercial": "..."
}
🧪 Flujo completo
Plain Text
Cliente
│
▼
Genera Cotización
│
▼
Motor de Reglas
│
▼
Nivel
│
▼
Precio
│
▼
Azure Foundry
│
▼
Agente IA
│
▼
Propuesta Comercial
│
▼
Resultado final
🔮 Mejoras futuras
Generación automática de documentos Word (.docx)
Exportación PDF
Historial de cotizaciones
Base de datos SQLite
Gestión de clientes
Dashboard administrativo
Despliegue en Azure App Service
Reportes comerciales
👩‍💻 Autora

Claudia Berenice Franco Suárez

Proyecto desarrollado como ejercicio de aplicación de:

Ingeniería de Software
Desarrollo Web
Inteligencia Artificial Generativa
Microsoft Azure AI Foundry
Microsoft Copilot
📄 Licencia

Proyecto académico y demostrativo desarrollado con fines de aprendizaje e innovación tecnológica.
