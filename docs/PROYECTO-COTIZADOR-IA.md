# Proyecto Final
# Asistente Inteligente para Cotización de Decoraciones con Globos

---

# 1. Información General

## Nombre del Proyecto

Asistente Inteligente para Cotización de Decoraciones con Globos

## Autor

Claudia Berenice Franco Suárez

## Curso

Fundamentos de Inteligencia Artificial Generativa

---

# 2. Resumen Ejecutivo

El proyecto busca digitalizar y optimizar el proceso de generación de cotizaciones para una empresa dedicada a la decoración de eventos con globos.

Actualmente la elaboración de cotizaciones depende del análisis manual realizado por una persona experta, quien interpreta referencias visuales enviadas por clientes o salones de eventos.

La solución propuesta permitirá capturar los requerimientos de manera estructurada mediante formularios, generar propuestas comerciales utilizando Inteligencia Artificial y automatizar los cálculos de cotización utilizando un catálogo configurable.

---

# 3. Problema Actual

Actualmente el proceso de cotización se realiza manualmente.

Flujo actual:

Cliente o salón comparte imágenes de referencia
↓
Se analizan las referencias
↓
Se identifican materiales y estructuras
↓
Se determina nivel de decoración
↓
Se calculan costos
↓
Se genera cotización
↓
Se envía al cliente

Principales problemas:

- Consumo elevado de tiempo
- Dependencia del conocimiento de una sola persona
- Posibles errores de cálculo
- Falta de estandarización
- Dificultad para consultar cotizaciones anteriores

---

# 4. Objetivo General

Desarrollar una aplicación web que permita generar propuestas decorativas y cotizaciones de forma más rápida y estandarizada mediante Microsoft Foundry y agentes de IA.

---

# 5. Objetivos Específicos

- Capturar datos del cliente.
- Capturar características de la decoración.
- Generar propuestas comerciales.
- Automatizar el cálculo de precios.
- Gestionar historial de cotizaciones.
- Reducir tiempos de elaboración.
- Facilitar futuras modificaciones.

---

# 6. Alcance

## Incluye

✅ Formulario de captura

✅ Gestión de clientes

✅ Gestión de cotizaciones

✅ Catálogo configurable

✅ Generación de propuesta comercial

✅ Generación de documento Word

✅ Historial de cotizaciones

✅ Uso de Microsoft Foundry

## No Incluye

❌ Facturación

❌ Cobros

❌ Portal para clientes

❌ Firma electrónica

❌ WhatsApp automático

---

# 7. Arquitectura General

Cliente
↓
Formulario Web
↓
Node.js + Express
↓
Motor de Cotización
↓
Microsoft Foundry
↓
Propuesta Comercial
↓
Cotización
↓
Word
↓
Historial

---

# 8. Función de la IA

La IA NO calculará precios.

La IA NO sustituirá el criterio del decorador.

La IA tendrá las siguientes funciones:

- Generar propuestas comerciales.
- Redactar descripciones profesionales.
- Generar observaciones.
- Generar contenido para cotizaciones.
- Sugerir clasificación basada en características seleccionadas.

---

# 9. Modelo Comercial

## Canales de Venta

### Directo

Cliente final.

### Intermediario

Salón de eventos o hacienda.

Regla:

Precio Final =
Precio Base + 35%

El porcentaje deberá ser configurable.

---

# 10. Tipos de Decoración

## Arco / Aro / Guirnalda

Niveles:

- Basic
- Smart
- Elite
- Platinum

## Medio Shimmer

Niveles:

- Smart
- Elite
- Platinum

## Shimmer Completo

Niveles:

- Smart
- Elite
- Platinum

## Paleta de Madera

Niveles:

- Smart
- Elite
- Platinum

---

# 11. Tipos de Globos

- Látex Sencillo
- Látex Doble
- Reflex
- Cromados
- Metálicos
- Transparentes
- Confetti

---

# 12. Extras Disponibles

- Follaje
- Decoración Extra
- Transporte
- Ayudante Extra
- Horas Extra
- Letrero MDF
- Letrero MDF Personalizado
- Letrero Neón
- Mesa Oro
- Pedestal para Pastel

---

# 13. Flujo Propuesto

Cliente comparte referencias
↓
Decorador analiza referencias
↓
Captura información en sistema
↓
Selecciona características
↓
Sistema determina paquete
↓
Sistema calcula costos
↓
IA genera propuesta comercial
↓
Sistema genera cotización
↓
Sistema genera documento Word
↓
Historial

---

# 14. Formulario de Cotización

## Datos del Cliente

- Nombre
- Teléfono
- Correo

## Datos del Evento

- Tipo de evento
- Fecha
- Dirección
- Número de invitados

## Canal de Venta

- Directo
- Intermediario

## Tipo de Decoración

- Arco / Aro / Guirnalda
- Medio Shimmer
- Shimmer Completo
- Paleta de Madera

## Nivel

- Basic
- Smart
- Elite
- Platinum

## Globos

Selección múltiple:

□ Látex Sencillo

□ Látex Doble

□ Cromados

□ Metálicos

□ Reflex

□ Transparentes

□ Confetti

## Extras

Selección múltiple:

□ Follaje

□ Decoración Extra

□ Transporte

□ Ayudante Extra

□ Horas Extra

□ Letrero MDF

□ Letrero MDF Personalizado

□ Letrero Neón

□ Mesa Oro

□ Pedestal para Pastel

## Comentarios

Campo libre.

---

# 15. Catálogo de Configuración

Toda la lógica comercial será configurable.

Archivo:

catalogo.json

Objetivo:

- Evitar precios en código.
- Facilitar mantenimiento.
- Permitir ajustes rápidos.
- Proteger información sensible.

Contendrá:

- Porcentaje de intermediario.
- Tipos de decoración.
- Niveles.
- Extras.
- Reglas de clasificación.
- Configuración comercial.

---

# 16. Base de Datos

## Clientes

- id
- nombre
- telefono
- correo

## Cotizaciones

- id
- cliente_id
- fecha_evento
- tipo_decoracion
- nivel
- precio_final
- propuesta
- fecha_creacion

---

# 17. Pantallas

## Inicio

Dashboard principal.

## Nueva Cotización

Formulario.

## Resultado

Detalle de la propuesta.

## Historial

Listado de cotizaciones.

## Configuración

Administración de catálogos.

---

# 18. MVP

## Sprint 1

- Formulario
- Node.js
- Express
- catalogo.json
- Cálculo de cotización

## Sprint 2

- Microsoft Foundry
- Agente IA
- Propuesta comercial

## Sprint 3

- Historial
- Base de datos SQLite

## Sprint 4

- Generación Word
- Mejoras visuales

---

# 19. Riesgos

| Riesgo | Mitigación |
|----------|----------|
| Costos incorrectos | Catálogo configurable |
| Respuestas inconsistentes | Prompt controlado |
| Información incompleta | Validaciones |
| Dependencia de IA | Revisión humana |

---

# 20. Mejoras Futuras

- Análisis automático de imágenes.
- Clasificación automática de decoraciones.
- Dashboard de ventas.
- Agenda de eventos.
- Seguimiento de clientes.
- WhatsApp Business.
- Firma electrónica.
- Portal para clientes.

---

# Notas del Proyecto

Pendientes:

-

-

-

Ideas futuras:

-

-

-