# Evaluación Práctica 01 — PPT para Estudiantes

> Este archivo contiene el contenido completo del PPT que se proyecta durante la evaluación.
> 
> **IMPORTANTE:** Esta versión tiene **15 problemas intencionales** en el sitio base. El estudiante solo necesita identificar **3** (uno de cada tipo).
> **Puntaje:** 4 Issues en el repo del docente × 5 pts = **20 pts**. Aprobado desde 14.

---

## 🔗 URLs de la evaluación

| Recurso | URL |
|---------|-----|
| 📦 **Repositorio base** | https://github.com/KrizRoMe/evaluacion-administracion-web |
| 🌐 **Sitio público (auditable)** | https://krizrome.github.io/evaluacion-administracion-web/ |
| 📋 **Issues del docente (aquí van las 4 Issues del estudiante)** | https://github.com/KrizRoMe/evaluacion-administracion-web/issues |
| 🔗 **Link de evaluación (4ª Issue)** | https://github.com/KrizRoMe/evaluacion-administracion-web/issues/new?template=link-evaluacion.yml |
| 📝 **Tu repo (estudiante)** | `https://github.com/TU-USUARIO/evaluacion-administracion-web-TU-NOMBRE` |
| 🚀 **Tu GitHub Pages** | `https://TU-USUARIO.github.io/evaluacion-administracion-web-TU-NOMBRE/` |

---

## 📌 Slide 1 — Portada

**EVALUACIÓN PRÁCTICA 01**
Administración y mantenimiento de un sitio web

- **Curso:** Administración de Sitios Web
- **Unidad:** 1
- **Duración:** 90 minutos
- **Escala:** 1 a 20 (aprobado desde 14)
- **Puntaje:** 4 Issues × 5 pts = 20 pts

**URLs visibles en portada:**
- 📦 Repositorio base: https://github.com/KrizRoMe/evaluacion-administracion-web
- 🌐 Sitio público: https://krizrome.github.io/evaluacion-administracion-web/

---

## 📌 Slide 2 — ¿Qué debes demostrar?

**Competencias a evaluar:**
- Git y GitHub
- GitHub CLI
- GitHub Pages
- Chrome DevTools (Elements, Network)
- Lighthouse
- axe DevTools (accesibilidad)
- GitHub Issues (con templates)
- Conceptos de mantenimiento web
- Conceptos de administración (VIVO / RÁPIDO / SEGURO)

**No se evalúa:** programación avanzada ni aplicar correcciones en código.

---

## 📌 Slide 3 — URLs de la evaluación (DEDICADA)

🌐 **Sitio base (el código que vas a auditar):**
https://krizrome.github.io/evaluacion-administracion-web/

📦 **Tu repositorio (donde subirás TU sitio desplegado):**
https://github.com/TU-USUARIO/evaluacion-administracion-web-TU-NOMBRE

🚀 **Tu sitio publicado (GitHub Pages):**
https://TU-USUARIO.github.io/evaluacion-administracion-web-TU-NOMBRE/

📋 **Repo del DOCENTE (donde crearás las 4 Issues):**
https://github.com/KrizRoMe/evaluacion-administracion-web/issues

⚠️ **Las 4 Issues se crean en el repo del DOCENTE, NO en tu repo personal.**

---

## 📌 Slide 4 — Flujo de la evaluación

```
Código base → Crear repo → GitHub Pages → Auditar+axe →
3 Issues hallazgos (repo docente) → Documentar solución → Issue link-evaluación (repo docente) → Entrega
```

**Tiempo total:** 90 minutos.
**Puntaje:** 4 Issues × 5 pts = 20 pts

> ⚠️ El sitio tiene **15 problemas intencionales**. Tú solo necesitas encontrar **3** (uno de cada tipo).

---

## 📌 Slide 5 — Parte 1: Clonar, verificar y subir (10 min)

**4 pasos (solo git, sin gh CLI):**

### 1️⃣ Clonar el repositorio del docente
```bash
$ git clone https://github.com/KrizRoMe/evaluacion-administracion-web.git
$ cd evaluacion-administracion-web
```

### 2️⃣ Verificar que el sitio funciona localmente
- Doble clic en `index.html` (o arrastrar al navegador)
- Debe verse la tienda ECOMARKET con productos, carrito y modo oscuro
- Si funciona → todo OK ✓

### 3️⃣ Crear tu repositorio personal (manual, en la web)
1. Abre https://github.com/new en tu navegador
2. Repository name: `evaluacion-administracion-web-TU-NOMBRE`
3. Visibility: **Public**
4. NO inicialices con README, .gitignore ni license (déjalo vacío)
5. Clic en **Create repository** → Copia la URL HTTPS

### 4️⃣ Conectar y subir con git puro
```bash
$ git remote set-url origin https://github.com/TU-USUARIO/evaluacion-administracion-web-TU-NOMBRE.git
$ git branch -M main
$ git push -u origin main
```

> ⚠️ Usamos `git remote set-url` (no `add`) porque ya hiciste `git clone` y el remoto `origin` ya existe — solo lo **redirigimos** a tu repo personal.
> Si clonar fallara y necesitas crear el remoto desde cero: `git remote add origin URL`.

> 💡 No se exige memorizar comandos. Si logras subir el código, está bien.

---

## 📌 Slide 6 — Parte 2: GitHub Pages (10 min)

1. Settings → Pages
2. Source: **Deploy from a branch** → Rama: `main` → `/ (root)`
3. Esperar 1–2 minutos

**Tu URL pública:**
```
https://TU-USUARIO.github.io/evaluacion-administracion-web-TU-NOMBRE/
```

---

## 📌 Slide 7 — Parte 3: Auditar el sitio (15 min)

**Herramientas a usar:**
- **Chrome DevTools** (F12) — Elements + Network
- **Lighthouse** — Performance → Analyze
- **axe DevTools** — Scan ALL of my page

**Tipos de problemas a buscar (uno de cada):**

📊 **RENDIMIENTO** (Chrome DevTools + Lighthouse):
- Imágenes sin `width/height`, sin `loading="lazy"`, `<script>` sin `defer`, SVGs pesados, recursos bloqueantes.

♿ **ACCESIBILIDAD** (axe DevTools):
- Imágenes sin `alt`, botones sin `aria-label`, contraste insuficiente, inputs sin `<label>`, falta de landmarks ARIA.

🔧 **MANTENIMIENTO** (package.json + código):
- jQuery 2.1.4 (versión antigua), meta tags de seguridad faltantes, comentarios `TODO/FIXME`, footer desactualizado, falta de runbook público.

**Objetivo:** encontrar **3 problemas reales**. Variedad es positiva pero no obligatoria.

---

## 📌 Slide 8 — Parte 4: Crear 3 Issues de hallazgos (25 min, en el REPO DEL DOCENTE)

⚠️ **Estas 3 Issues NO se crean en tu repo personal. Se crean en el repo del docente.**

**Pasos:**
1. Abre `https://github.com/KrizRoMe/evaluacion-administracion-web/issues` en una pestaña nueva.
2. Clic en New issue.
3. Selecciona UNO de los 3 templates: rendimiento.yml, accesibilidad.yml, o mantenimiento.yml.
4. Completa todas las secciones del template.
5. Submit. Repite 2 veces más (1 issue por cada tipo).

**Formato de cada Issue (ciclo de mejora):**
- Problema (qué encontraste)
- Evidencia — MEDIR (herramienta, métrica, captura)
- Impacto (a quién afecta)
- Solución propuesta — PROPONER + MEJORAR (en texto, no aplicar en código)
- Pilar (VIVO / RÁPIDO / SEGURO)
- Concepto del curso
- Severidad + Justificación

**Puntaje:** 3 Issues × 5 pts = 15 pts (no se exige aplicar correcciones en código).

---

## 📌 Slide 9 — Parte 5: Documentar solución (10 min)

**No es necesario aplicar las correcciones en el código.** Solo ANALIZAR y PROPONER en texto.

**En cada Issue, completa la sección Solución propuesta** (ejemplos):
- "Agregar atributos `width` y `height` a la etiqueta `<img>` del hero."
- "Añadir el atributo `defer` al `<script>`."
- "Actualizar `jquery` a una versión 3.x."
- "Agregar atributo `alt` descriptivo a las imágenes."

---

## 📌 Slide 10 — Parte 6: Issue de link-evaluación (5 min)

Esta es la **4ª y última Issue**. Se crea también en el repo del docente, pero con el template `link-evaluacion.yml`.

**Pasos:**
1. En el repo del docente: Issues → New issue
2. Selecciona el template **🔗 Link de evaluación**
3. Completa: nombre, link de tu repo, link público de tu sitio
4. Clic en Submit

**🔗 LINK DIRECTO:**
```
https://github.com/KrizRoMe/evaluacion-administracion-web/issues/new?template=link-evaluacion.yml
```

**La Issue te pide SOLO:**
- Nombre completo
- Link de tu repositorio
- Link público de tu sitio

---

## 📌 Slide 11 — Checklist final

**📦 En TU repositorio:**
- ☐ Repo público
- ☐ GitHub Pages funciona
- ☐ README completo
- ☐ URLs y datos del estudiante

**📋 3 ISSUES EN REPO DEL DOCENTE:**
- ☐ Issue 1 con template `rendimiento.yml`
- ☐ Issue 2 con template `accesibilidad.yml`
- ☐ Issue 3 con template `mantenimiento.yml`
- ☐ Cada Issue completa todas las secciones

**🔗 4ª ISSUE EN REPO DEL DOCENTE:**
- ☐ Abrí el link del template `link-evaluacion.yml`
- ☐ Completé: nombre, link de mi repo, link público de mi sitio
- ☐ Envié la Issue (solo una, no más)

**📊 PUNTAJE TOTAL: 20 puntos**
- 3 Issues de hallazgos × 5 pts = 15 pts
- 1 Issue de link-evaluación × 5 pts = 5 pts
- **Aprobado: ≥14 pts**

---

## 📚 Notas adicionales

### Tiempos por fase

| Fase | Tiempo |
|------|--------|
| Repositorio | 10 min |
| GitHub Pages | 10 min |
| Auditoría | 15 min |
| 3 Issues hallazgos (repo docente) | 25 min |
| Documentar soluciones + README | 10 min |
| Issue link-evaluación | 5 min |
| Verificación | 5 min |
| **Total** | **90 min** |

### Resumen de cambios vs versión anterior

| Antes | Ahora |
|-------|-------|
| Issues en el repo del estudiante | **Issues en el repo del DOCENTE** |
| 4 Issues independientes | **4 Issues: 3 hallazgos + 1 link-evaluación** |
| Plantillas genéricas | **Plantillas por tipo de problema** |

¡Éxito! 🌿
