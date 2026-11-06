# REGLAS-NEGOCIO.md

# Cotizador Inteligente para Decoración con Globos

## Propósito

Este documento define las reglas oficiales para determinar el paquete de decoración que corresponde a una solicitud de cliente.

Las reglas se basan en el catálogo comercial definido por el negocio y representan el conocimiento utilizado actualmente para generar cotizaciones.

---

# 1. Principios Generales

## PG-01 – La IA no determina precios

La Inteligencia Artificial NO puede:

- Inventar precios.
- Calcular costos.
- Aplicar descuentos.
- Modificar reglas comerciales.
- Cambiar niveles de paquetes.

Los precios provienen únicamente de:

- catalogo.json
- precios.json

---

## PG-02 – La IA sí puede generar contenido

La IA puede:

- Generar propuestas comerciales.
- Redactar observaciones.
- Generar descripciones de decoración.
- Redactar cotizaciones.
- Generar contenido para contratos.

---

## PG-03 – Configuración sobre Código

Toda la lógica comercial deberá almacenarse fuera del código.

Archivos principales:

- catalogo.json
- precios.json
- settings.json

---

# 2. Canales de Venta

Existen dos canales de venta:

## Directo

Cliente final.

## Intermediario

Salón de eventos o hacienda.

---

## Regla Canal-01

El porcentaje de intermediario es configurable.

No debe existir ningún porcentaje fijo escrito directamente en el código.

Fórmula:

Precio Final =
Precio Base +
Porcentaje Intermediario

---

# 3. Estructuras Disponibles

## Aro, Arco o Guirnalda

Niveles:

- Básico
- Smart
- Elite
- Platinum

---

## Medio Shimmer

Niveles:

- Smart
- Elite
- Platinum

---

## Shimmer Completo

Niveles:

- Smart
- Elite
- Platinum

---

## Paleta de Madera

Niveles:

- Smart
- Elite
- Platinum

---

# 4. Regla Principal de Clasificación

## RC-01 – El atributo más alto determina el paquete

Cada elemento seleccionado por el usuario tiene un nivel mínimo asociado.

El paquete final será el nivel más alto encontrado.

Ejemplo:

Decoración:
Orgánica → Smart

Globo:
Doble → Smart

Tono:
Cromado → Elite

Resultado:

Paquete Final = Elite

---

# 5. Escala Interna de Clasificación

Para cálculos internos se utilizará:

| Nivel | Valor |
|---------|---------|
| Básico | 1 |
| Smart | 2 |
| Elite | 3 |
| Platinum | 4 |

La clasificación siempre será el valor máximo encontrado.

---

# 6. Reglas para Aro, Arco o Guirnalda

## Decoración

| Opción | Nivel |
|----------|----------|
| Clásica | Básico |
| Orgánica | Smart |
| Follaje | Platinum |
| Impresión Vinil | Platinum |

---

## Globo

| Opción | Nivel |
|----------|----------|
| Látex Sencillo | Básico |
| Látex Doble | Smart |

---

## Tonos

| Opción | Nivel |
|----------|----------|
| Mate | Básico |
| Mate y Reflex | Smart |
| Cromados | Elite |
| Metálicos | Elite |
| Transparente Confetti | Elite |

---

# 7. Reglas para Medio Shimmer, Shimmer Completo y Paleta de Madera

## Decoración

| Opción | Nivel |
|----------|----------|
| Clásica | Smart |
| Orgánica | Elite |
| Follaje | Platinum |
| Impresión Vinil o Polipropileno | Platinum |

---

## Globo

| Opción | Nivel |
|----------|----------|
| Látex Sencillo | Smart |
| Látex Doble | Elite |

---

## Tonos

| Opción | Nivel |
|----------|----------|
| Mate | Smart |
| Mate y Reflex | Elite |
| Cromados | Platinum |
| Metálicos | Platinum |
| Transparente Confetti | Platinum |

---

## Letreros

| Opción | Nivel |
|----------|----------|
| MDF | Smart |
| MDF Personalizado | Elite |
| Neón | Platinum |

---

## Renta de Follaje

| Opción | Nivel |
|----------|----------|
| Sí | Elite |

---

## Mesa Oro

| Opción | Nivel |
|----------|----------|
| 1 Mesa | Elite |
| 2 o 3 Mesas | Platinum |

---

## Pedestal para Pastel

| Opción | Nivel |
|----------|----------|
| Sí | Platinum |

---

# 8. Restricciones por Estructura

## RE-01

La estructura:

- Aro
- Arco
- Guirnalda

NO permite:

- MDF
- MDF Personalizado
- Neón
- Mesa Oro
- Pedestal para Pastel
- Follaje de renta

---

## RE-02

Si el usuario solicita cualquiera de estos elementos:

- Neón
- Mesa Oro
- Pedestal para Pastel
- MDF
- MDF Personalizado

El sistema debe sugerir:

- Medio Shimmer
- Shimmer Completo
- Paleta de Madera

---

# 9. Mejora Incluida

## RI-01

Cuando un atributo obliga a subir de nivel, el cliente recibe automáticamente todos los beneficios de ese nivel.

Ejemplo:

Cliente selecciona:

- Globo sencillo
- Tono cromado

Resultado:

Paquete = Elite

El cliente recibe todos los elementos incluidos en Elite.

---

# 10. Explicación de Clasificación

## EC-01

El sistema siempre debe mostrar:

- Nivel asignado
- Motivo de clasificación

Ejemplo:

Nivel Asignado:
Platinum

Motivo:
El cliente solicitó Letrero Neón.

---

# 11. Cotización por Paquete

## CP-01

Los artículos no se cotizan individualmente.

Primero se determina el paquete.

Posteriormente se obtiene el precio correspondiente.

Ejemplo:

Decoración:
Shimmer Completo

Nivel:
Platinum

Resultado:

Se utiliza el precio Platinum de Shimmer Completo.

---

# 12. Flujo Oficial del Cotizador

Cliente comparte referencias
↓
Decorador analiza referencias
↓
Captura características
↓
Sistema determina paquete
↓
Sistema obtiene precio
↓
Sistema aplica porcentaje de intermediario
↓
IA genera propuesta comercial
↓
Sistema genera cotización
↓
Sistema genera documento Word
↓
Cotización lista para envío

---

# 13. Responsabilidad de la IA

La IA:

✅ Genera propuesta comercial

✅ Genera observaciones

✅ Genera descripción comercial

✅ Genera contenido para Word

✅ Genera texto para cotización

La IA NO:

❌ Determina paquetes

❌ Calcula precios

❌ Modifica importes

❌ Cambia reglas comerciales

❌ Aplica descuentos

---

# 14. Ejemplos de Clasificación

## Ejemplo 1

Estructura:
Aro

Decoración:
Clásica

Globo:
Sencillo

Tono:
Mate

Resultado:
Básico

---

## Ejemplo 2

Estructura:
Aro

Decoración:
Orgánica

Globo:
Doble

Resultado:
Smart

---

## Ejemplo 3

Estructura:
Aro

Decoración:
Orgánica

Globo:
Doble

Tono:
Cromado

Resultado:
Elite

---

## Ejemplo 4

Estructura:
Shimmer Completo

Decoración:
Orgánica

Globo:
Doble

Letrero:
Neón

Resultado:
Platinum

Motivo:
Letrero Neón

---

## Ejemplo 5

Estructura:
Paleta de Madera

Decoración:
Clásica

Pedestal para Pastel:
Sí

Resultado:
Platinum

Motivo:
Pedestal para Pastel