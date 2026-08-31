# Respuestas Esperadas — Evaluación Práctica 01

> **Archivo exclusivo del docente. No entregar al estudiante.**

El sitio base contiene **aproximadamente 6 problemas intencionales**. El estudiante solo necesita encontrar 3.

---

## 📋 Resumen de los 6 problemas intencionales

| # | Problema | Pilar | Tipo de mantenimiento | Archivo |
|---|----------|-------|------------------------|---------|
| 1 | Imagen del hero sin `width`/`height` | RÁPIDO | Correctivo / Perfectivo | `index.html` |
| 2 | Imagen del producto-1 sin `width`/`height` | RÁPIDO | Correctivo / Perfectivo | `index.html` |
| 3 | `<script>` cargado sin `defer` (bloqueante) | RÁPIDO | Perfectivo / Correctivo | `index.html` |
| 4 | Dependencias antiguas en `package.json` | SEGURO | Preventivo / Correctivo | `package.json` |
| 5 | Footer con "Última actualización: hace mucho tiempo" | SEGURO / Administración | Preventivo | `index.html` |
| 6 | README inicial no documenta procedimiento de caída ni backup | VIVO / Administración | Preventivo / Adaptativo | `README.md` |

---

## 🔎 Problema 1 — Imagen del hero sin width/height

**Ubicación exacta:** `index.html`, sección `<section id="inicio" class="hero">`, línea del `<img src="assets/hero.svg">`.

**Detección:**
- **DevTools Elements** → ver que la etiqueta `<img>` no tiene atributos `width` ni `height`.
- **Lighthouse** → advertencia "Image elements without explicit width/height" en el reporte.
- **Network** → ver que la imagen se carga.

**Evidencia esperada:**
> "En Elements, la etiqueta `<img src='assets/hero.svg'>` no tiene atributos `width` ni `height`, lo cual puede causar CLS."

**Solución esperada:**
```html
<img src="assets/hero.svg" alt="Productos ecológicos" width="800" height="500">
```

**Tipo de mantenimiento:**
- **Correctivo** (corrige un problema existente).
- **Perfectivo** (mejora el rendimiento).
- Cualquiera es válido si está argumentado.

**Pilar:** RÁPIDO.

**Respuestas alternativas aceptables:**
- "Es una mejora de calidad" → Perfectivo.
- "Corrige un layout inestable" → Correctivo.
- "Evita futuros problemas de percepción" → Preventivo.

---

## 🔎 Problema 2 — Imagen producto-1 sin width/height

**Ubicación exacta:** `index.html`, tarjeta 1 del `<section id="productos">`.

**Detección:**
- **DevTools Elements** → misma técnica que el problema 1.
- **Lighthouse** → mismo aviso.

**Solución esperada:** agregar `width` y `height`.

**Tipo de mantenimiento:** Correctivo / Perfectivo.

**Pilar:** RÁPIDO.

**Nota pedagógica:** Este problema refuerza el concepto CLS en una segunda ubicación. Si el estudiante reporta este y no el problema 1, también es válido.

---

## 🔎 Problema 3 — `<script>` sin `defer`

**Ubicación exacta:** `index.html`, al final del `<body>`:

```html
<script src="script.js"></script>
```

**Detección:**
- **DevTools Elements** → ver la etiqueta `<script>` sin atributo `defer` ni `async`.
- **Lighthouse** → recomendación "Eliminate render-blocking resources" si el JS es grande.
- **Concepto** → render-blocking scripts.

**Evidencia esperada:**
> "El `<script>` está al final del HTML pero sin `defer`. Para mejor rendimiento debería tener `defer` o cargarse con `async`."

**Solución esperada:**
```html
<script src="script.js" defer></script>
```

**Tipo de mantenimiento:** Perfectivo / Correctivo.

**Pilar:** RÁPIDO.

**Respuestas alternativas aceptables:**
- "Podría moverse al `<head>` con `defer`."
- "Podría usarse `async` si el script no depende del DOM."

---

## 🔎 Problema 4 — Dependencias antiguas en package.json

**Ubicación exacta:** `package.json`, sección `dependencies`:

```json
"dependencies": {
  "left-pad": "1.1.3",
  "moment": "2.18.1",
  "jquery": "2.1.4"
}
```

**Problemas identificables:**
- `jquery 2.1.4` → versión de 2014, tiene vulnerabilidades conocidas.
- `moment 2.18.1` → muy antigua, además está discontinuada.
- `left-pad` → no se usa en el código (innecesaria).
- No hay `engines` ni política de actualización.

**Detección:**
- **Lectura del código** → ver `package.json`.
- **npm audit** (si tiene npm) → muestra vulnerabilidades.
- **Concepto** → actualización de dependencias = mantenimiento preventivo.

**Evidencia esperada:**
> "El `package.json` declara `jquery 2.1.4`, una versión de 2014 que tiene vulnerabilidades conocidas. Además, las dependencias no se usan en este sitio estático."

**Solución esperada:**
- Actualizar a versiones más recientes o eliminar dependencias no usadas.
- Documentar la política de actualización.

**Tipo de mantenimiento:** Preventivo (evita futuros problemas de seguridad) / Correctivo (corrige versiones vulnerables).

**Pilar:** SEGURO.

**Respuestas alternativas aceptables:**
- "Las dependencias deberían revisarse periódicamente" → Preventivo.
- "Hay una versión vulnerable que debe parcharse" → Correctivo.

---

## 🔎 Problema 5 — Footer con "Última actualización: hace mucho tiempo"

**Ubicación exacta:** `index.html`, `<footer class="site-footer">`:

```html
<p>© 2026 EcoMarket — Última actualización: hace mucho tiempo.</p>
```

**Detección:**
- **Lectura del footer** → falta fecha real, no hay indicio de mantenimiento.
- **Concepto** → un sitio administrado debe mostrar su estado de mantenimiento.

**Evidencia esperada:**
> "El footer indica 'Última actualización: hace mucho tiempo', lo cual sugiere falta de mantenimiento y no es coherente con un sitio administrado profesionalmente."

**Solución esperada:**
- Cambiar el texto a la fecha actual.
- O eliminar la frase.
- O agregar una política de mantenimiento.

**Tipo de mantenimiento:** Preventivo / Adaptativo.

**Pilar:** SEGURO (transparencia) o Administración.

**Respuestas alternativas aceptables:**
- Cualquiera que mencione transparencia o documentación.

---

## 🔎 Problema 6 — Falta de procedimientos en el README inicial

**Ubicación exacta:** `README.md` (plantilla del estudiante entregada inicialmente vacía en su mayoría).

**Detección:**
- **Lectura del README** → no hay SLI, SLO, SLA, procedimiento ante caída.
- **Concepto** → un sitio profesional debe documentar su operación.

**Evidencia esperada:**
> "El README no incluye documentación sobre cómo responder a una caída del sitio, ni backups, ni métricas de disponibilidad."

**Solución esperada:** completar el README con SLI, SLO, backup 3-2-1 y runbook.

**Tipo de mantenimiento:** Preventivo / Adaptativo.

**Pilar:** VIVO (disponibilidad) / Administración.

**Respuestas alternativas aceptables:**
- "Falta plan de recuperación ante desastres" → Adaptativo.
- "No hay métricas de servicio" → Preventivo.

---

## 🧮 Esquema de combinación válido para los 3 Issues

El estudiante debe elegir **3 problemas** de los 6 anteriores. Idealmente cubriendo las 3 áreas:

| Issue | Problema esperado | Pilar | Mantenimiento |
|-------|-------------------|-------|---------------|
| 1 | Imagen sin width/height **o** script sin defer | RÁPIDO | Correctivo / Perfectivo |
| 2 | Dependencias antiguas | SEGURO | Preventivo / Correctivo |
| 3 | Falta de documentación / footer desactualizado | VIVO / Administración | Preventivo / Adaptativo |

**Combinaciones alternativas aceptables:**
- 3 problemas de RÁPIDO (válido si el estudiante argumenta cada uno).
- 2 de RÁPIDO + 1 de SEGURO.
- Cualquier combinación donde cada Issue esté bien fundamentada.

---

## 📝 Plantilla de respuesta para el docente

Cuando un estudiante entregue:

1. Verificar que existan **exactamente 3 Issues**.
2. Leer cada Issue completa.
3. Evaluar la **validez técnica** del problema, no la coincidencia exacta con esta lista.
4. Evaluar la **clasificación** por la calidad de la explicación, no por la etiqueta exacta.
5. Si la Issue está bien fundamentada → aceptarla aunque difiera de la respuesta esperada.

**Regla de oro:** en caso de duda, **aceptar** la respuesta si está técnicamente argumentada.