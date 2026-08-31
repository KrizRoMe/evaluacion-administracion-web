# Evaluación Práctica 01 — PPT para Estudiantes

> Este archivo contiene el contenido completo del PPT que se proyecta durante la evaluación. Útil también para imprimir o revisar sin proyector.

---

## 🔗 URLs de la evaluación

| Recurso | URL |
|---------|-----|
| 📦 **Repositorio base** | https://github.com/KrizRoMe/evaluacion-administracion-web |
| 🌐 **Sitio público (auditable)** | https://krizrome.github.io/evaluacion-administracion-web/ |
| 📋 **Issues del docente** | https://github.com/KrizRoMe/evaluacion-administracion-web/issues |
| 📤 **LINK DE ENTREGA (crear Issue con tus URLs)** | https://github.com/KrizRoMe/evaluacion-administracion-web/issues/new?template=entrega.yml |
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
- **Modalidad:** individual

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

🌐 **Sitio base (código que vas a auditar):**
https://krizrome.github.io/evaluacion-administracion-web/

📦 **Tu repositorio (donde subirás TU evaluación):**
https://github.com/TU-USUARIO/evaluacion-administracion-web-TU-NOMBRE

🚀 **Tu sitio publicado (GitHub Pages):**
https://TU-USUARIO.github.io/evaluacion-administracion-web-TU-NOMBRE/

📤 **Dónde entregas tu evaluación (Issue de entrega):**
https://github.com/KrizRoMe/evaluacion-administracion-web/issues/new?template=entrega.yml

📌 Los 3 hallazgos se documentan como Issues EN TU REPO. La entrega final se hace como Issue AQUÍ.

---

## 📌 Slide 4 — Flujo de la evaluación

```
Código base
   ↓
Crear repositorio
   ↓
Publicar con GitHub Pages
   ↓
Auditar con DevTools / Lighthouse / axe DevTools
   ↓
Crear 3 Issues en TU repo
   ↓
Documentar solución propuesta en cada Issue
   ↓
Completar README
   ↓
Crear Issue de ENTREGA en repo del docente
```

**Tiempo total:** 90 minutos.

---

## 📌 Slide 5 — Parte 1: Repositorio (10 min)

**Crear tu repositorio público:**

```bash
git init
git add .
git commit -m "feat: inicio de evaluación"
gh repo create evaluacion-administracion-web-TU-NOMBRE --public --source=. --remote=origin --push
```

**Alternativa con git directo:**

```bash
git remote add origin https://github.com/TU-USUARIO/evaluacion-administracion-web-TU-NOMBRE.git
git branch -M main
git push -u origin main
```

**Resultado esperado:** código del sitio en tu repositorio público.

---

## 📌 Slide 6 — Parte 2: GitHub Pages (10 min)

**Activar GitHub Pages:**

1. Settings → Pages
2. Source: **Deploy from a branch**
3. Rama: `main`, carpeta: `/ (root)`
4. Guardar
5. Esperar 1–2 minutos

**Tu URL pública:**
```
https://TU-USUARIO.github.io/evaluacion-administracion-web-TU-NOMBRE/
```

---

## 📌 Slide 7 — Parte 3: Auditoría (15 min)

**Herramientas a usar:**

- **Chrome DevTools** (F12) — Elements + Network
- **Lighthouse** — Performance → Analyze
- **axe DevTools** (extensión) — Scan ALL of my page

**Objetivo:** encontrar **3 problemas reales** en el sitio.

---

## 📌 Slide 8 — Parte 4: Crear 3 Issues en TU repo (20 min)

⚠️ Estos 3 Issues se crean en **TU PROPIO repositorio**, NO en el del docente.

**Templates interactivos** disponibles en `.github/ISSUE_TEMPLATE/` de tu repo:

- 📊 `rendimiento.yml` → performance / Lighthouse
- 🔧 `mantenimiento.yml` → dependencias / seguridad
- ♿ `accesibilidad.yml` → axe DevTools
- 📝 `general.yml` → cualquier otro hallazgo

**Cada template es un FORMULARIO INTERACTIVO con:**

- 📝 Inputs (texto corto con placeholder)
- 📄 Textareas (texto largo)
- 🔽 Dropdowns (Pilar, Mantenimiento, etc)
- ☑️ Checkboxes (Principios WCAG, Conceptos múltiples)
- ⚠️ Validación required (no se envía si está vacío)

---

## 📌 Slide 9 — Parte 5: Documentar solución + README (25 min)

**No es necesario aplicar las correcciones en el código.** Solo ANALIZAR y PROPONER en texto.

**En cada Issue, completa la sección Solución propuesta** (ejemplos):

- "Agregar atributos `width` y `height` a la etiqueta `<img>` del hero."
- "Añadir el atributo `defer` al `<script>`."
- "Actualizar `jquery` a una versión 3.x."
- "Agregar atributo `alt` descriptivo a todas las imágenes."

**README debe incluir:**

VIVO • RÁPIDO (con LCP/INP/CLS/TTFB) • SEGURO (2 acciones) • Backup 3-2-1 • SLI • SLO • SLA • Runbook (4–6 pasos) • Datos del estudiante + URLs

---

## 📌 Slide 10 — Parte 6: Crear Issue de ENTREGA (5 min)

**Esta Issue se crea en el repo del DOCENTE.**

**Pasos:**

1. Abre el repo del curso en una pestaña nueva
2. Clic en **Issues → New issue**
3. Selecciona el template **📤 Entrega de evaluación**
4. Completa el formulario (nombre, código, URLs)
5. Clic en **Submit**

**🔗 LINK DIRECTO:**
```
https://github.com/KrizRoMe/evaluacion-administracion-web/issues/new?template=entrega.yml
```

**La Issue de entrega te pide:**

- Nombre completo
- Código
- URL de TU repositorio
- URL de TU GitHub Pages
- Checklist de auto-verificación

---

## 📌 Slide 11 — Checklist final completo

**📦 En TU repositorio:**

- ☐ Repo público
- ☐ GitHub Pages funciona
- ☐ EXACTAMENTE 3 Issues creadas
- ☐ Cada Issue usa un template .yml
- ☐ Cada Issue completa todas las secciones
- ☐ README completo
- ☐ URLs y datos del estudiante

**📤 En repo del DOCENTE (entrega):**

- ☐ Abrí el link de entrega
- ☐ Seleccioné el template 'Entrega'
- ☐ Completé nombre, código
- ☐ Pegué URL de mi repo
- ☐ Pegué URL de mi GitHub Pages
- ☐ Marqué el checklist
- ☐ Envié la Issue

🔗 **ENTREGAR AL DOCENTE:** https://github.com/KrizRoMe/evaluacion-administracion-web/issues/new?template=entrega.yml

📌 Los 3 hallazgos van en TU repo. La ENTREGA final va AQUÍ.

---

## 📚 Notas adicionales (no proyectadas)

### Si te quedas atascado

- Lee los mensajes de error completos.
- `git status` te muestra el estado.
- `docs.github.com` está en español.

### Tiempos por fase

| Fase | Tiempo |
|------|--------|
| Repositorio | 10 min |
| GitHub Pages | 10 min |
| Auditoría | 15 min |
| Issues (TU repo) | 20 min |
| Documentar soluciones + README | 25 min |
| Issue de ENTREGA | 5 min |
| Verificación | 5 min |
| **Total** | **90 min** |

¡Éxito! 🌿
