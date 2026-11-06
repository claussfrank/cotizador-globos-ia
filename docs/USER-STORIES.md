# USER-STORIES.md

# Proyecto
# Cotizador Inteligente para Decoración con Globos

---

# Objetivo

Este documento describe las historias de usuario que servirán como base para el desarrollo del sistema.

Las historias están organizadas por prioridad para facilitar la construcción del MVP.

---

# Épica 1
# Gestión de Cotizaciones

## HU-001
### Crear una nueva cotización

Como decoradora

Quiero registrar los datos básicos de un cliente

Para poder generar una cotización personalizada.

### Criterios de aceptación

✅ Registrar nombre

✅ Registrar teléfono

✅ Registrar correo

✅ Registrar observaciones

---

## HU-002
### Registrar información del evento

Como decoradora

Quiero capturar los datos del evento

Para contextualizar la decoración solicitada.

### Criterios de aceptación

✅ Tipo de evento

✅ Fecha del evento

✅ Dirección o ubicación

✅ Número de invitados

✅ Comentarios adicionales

---

# Épica 2
# Clasificación de Decoraciones

## HU-003
### Seleccionar estructura decorativa

Como decoradora

Quiero seleccionar la estructura base de la decoración

Para iniciar la configuración de la propuesta.

### Criterios de aceptación

Opciones disponibles:

- Aro / Arco / Guirnalda
- Medio Shimmer
- Shimmer Completo
- Paleta de Madera

---

## HU-004
### Seleccionar estilo de decoración

Como decoradora

Quiero indicar el estilo decorativo solicitado

Para que el sistema determine el paquete adecuado.

### Criterios de aceptación

Opciones:

- Clásica
- Orgánica
- Follaje
- Impresión Vinil
- Impresión Polipropileno

---

## HU-005
### Seleccionar tipo de globo

Como decoradora

Quiero indicar los materiales principales utilizados

Para clasificar correctamente la decoración.

### Criterios de aceptación

Opciones:

- Látex Sencillo
- Látex Doble

---

## HU-006
### Seleccionar acabados

Como decoradora

Quiero seleccionar los acabados visuales

Para mejorar la precisión de la clasificación.

### Criterios de aceptación

Opciones:

- Mate
- Reflex
- Cromado
- Metálico
- Transparente Confetti

---

## HU-007
### Seleccionar artículos de renta

Como decoradora

Quiero indicar los elementos adicionales requeridos

Para generar una cotización más precisa.

### Criterios de aceptación

Opciones:

- Letrero MDF
- Letrero MDF Personalizado
- Letrero Neón
- Follaje Extra
- Mesa Oro
- Pedestal para Pastel

---

# Épica 3
# Motor de Reglas

## HU-008
### Determinar automáticamente el paquete

Como decoradora

Quiero que el sistema determine automáticamente el paquete correspondiente

Para evitar errores de clasificación.

### Criterios de aceptación

✅ Aplicar reglas de negocio

✅ Considerar el atributo más alto

✅ Mostrar nivel asignado

✅ Mostrar motivo de clasificación

---

## HU-009
### Mostrar justificación del paquete

Como decoradora

Quiero visualizar qué elemento determinó el nivel asignado

Para poder explicar la cotización al cliente.

### Criterios de aceptación

Ejemplo:

Nivel:

Platinum

Motivo:

Letrero Neón

---

## HU-010
### Validar restricciones por estructura

Como decoradora

Quiero que el sistema detecte configuraciones inválidas

Para evitar cotizaciones incorrectas.

### Criterios de aceptación

Ejemplo:

Si selecciona:

Arco

y

Letrero Neón

El sistema debe sugerir:

- Medio Shimmer
- Shimmer Completo
- Paleta de Madera

---

# Épica 4
# Cálculo Comercial

## HU-011
### Calcular costo base

Como decoradora

Quiero que el sistema obtenga el precio correspondiente al paquete

Para automatizar la cotización.

### Criterios de aceptación

✅ Consultar precios.json

✅ No utilizar precios hardcodeados

---

## HU-012
### Aplicar porcentaje de intermediario

Como decoradora

Quiero seleccionar si la venta es directa o intermediaria

Para obtener el precio correcto.

### Criterios de aceptación

Opciones:

- Directo
- Intermediario

El porcentaje debe obtenerse desde configuración.

---

## HU-013
### Calcular precio final

Como decoradora

Quiero visualizar el importe final

Para compartirlo con el cliente.

### Criterios de aceptación

Mostrar:

- Precio base
- Incremento intermediario
- Total final

---

# Épica 5
# Inteligencia Artificial

## HU-014
### Generar propuesta comercial

Como decoradora

Quiero que la IA redacte una propuesta comercial profesional

Para ahorrar tiempo en la elaboración de cotizaciones.

### Criterios de aceptación

✅ Utilizar Microsoft Foundry

✅ No generar precios

✅ Utilizar información del sistema

---

## HU-015
### Generar observaciones

Como decoradora

Quiero que la IA redacte recomendaciones y observaciones

Para enriquecer la cotización.

### Criterios de aceptación

✅ Tono profesional

✅ Texto personalizado

✅ Máximo tres párrafos

---

## HU-016
### Generar justificación comercial

Como decoradora

Quiero que la IA explique los beneficios de la propuesta

Para mejorar la experiencia del cliente.

### Criterios de aceptación

✅ Resaltar valor agregado

✅ Utilizar lenguaje comercial

✅ No inventar información

---

# Épica 6
# Generación de Documentos

## HU-017
### Generar cotización en Word

Como decoradora

Quiero obtener una cotización en formato Word

Para enviarla al cliente.

### Criterios de aceptación

✅ Utilizar plantilla corporativa

✅ Completar automáticamente los datos

✅ Incluir propuesta comercial

✅ Incluir observaciones

---

## HU-018
### Generar contrato

Como decoradora

Quiero generar un documento contractual

Para formalizar el servicio contratado.

### Criterios de aceptación

✅ Utilizar plantilla

✅ Completar campos automáticamente

✅ Mantener formato corporativo

---

# Épica 7
# Historial

## HU-019
### Guardar cotizaciones

Como decoradora

Quiero almacenar las cotizaciones generadas

Para poder consultarlas posteriormente.

### Criterios de aceptación

✅ Guardar cliente

✅ Guardar decoración

✅ Guardar importe

✅ Guardar fecha

---

## HU-020
### Consultar historial

Como decoradora

Quiero buscar cotizaciones anteriores

Para reutilizar información existente.

### Criterios de aceptación

Buscar por:

- Cliente
- Fecha
- Evento

---

# MVP (Entrega Inicial)

Historias incluidas:

✅ HU-001

✅ HU-002

✅ HU-003

✅ HU-004

✅ HU-005

✅ HU-006

✅ HU-007

✅ HU-008

✅ HU-009

✅ HU-011

✅ HU-012

✅ HU-013

✅ HU-014

✅ HU-015

---

# Funcionalidades Futuras

✅ HU-017

✅ HU-018

✅ HU-019

✅ HU-020

✅ Análisis de imágenes

✅ Dashboard de ventas

✅ Agenda de eventos

✅ Seguimiento de clientes

✅ WhatsApp Business