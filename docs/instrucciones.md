# Instrucciones para el estudiante — Evaluación Práctica 01

**Curso:** Administración de Sitios Web
**Duración total:** 90 minutos
**Modalidad:** individual
**Escala:** 1–20 (aprobado desde 14)

---

## 🎯 ¿Qué debes demostrar?

Que puedes realizar tareas básicas de administración de un sitio web:

1. Crear y administrar un repositorio Git/GitHub.
2. Utilizar GitHub CLI.
3. Publicar una página mediante GitHub Pages.
4. Inspeccionar una página web con Chrome DevTools.
5. Utilizar Lighthouse.
6. Identificar problemas reales en un sitio web.
7. Documentarlos con GitHub Issues.
8. Clasificarlos (RÁPIDO / VIVO / SEGURO + tipo de mantenimiento).
9. Proponer soluciones en texto dentro de cada Issue (sin necesidad de aplicarlas en código).
10. Completar el README con conceptos administrativos.

---

## 📦 Material permitido

- Tus apuntes de clase.
- Documentación oficial de GitHub (docs.github.com).
- Material entregado por el docente.
- Computadora con `git` y `gh` CLI configurados.

**No** se permite comunicación con otros estudiantes durante la evaluación.

---

## 🌐 Sitio entregado

Recibirás un sitio web llamado **EcoMarket** con varios problemas intencionales.

El sitio contiene:
- Una tienda ecológica ficticia.
- HTML, CSS y JavaScript vanilla.
- Una dependencia declarada en `package.json`.
- Imágenes placeholder.

Debes auditarlo y encontrar **3 problemas**.

**No es necesario encontrarlos todos**, solo 3 válidos.

---

## 🧭 Flujo de la evaluación

```
1. Crear tu repositorio (10 min)
2. Publicar con GitHub Pages (10 min)
3. Auditar el sitio (15 min)
4. Crear 4 GitHub Issues usando los templates (20 min)
5. Documentar la solución propuesta en cada Issue (10 min)
6. Completar el README (15 min)
7. Verificar todo (5 min)
```

> ⚠️ **El sitio contiene 15 problemas intencionales.** Tú solo necesitas identificar **4** correctamente analizados.
> **Puntaje:** 4 Issues × 5 pts = 20 pts. Aprobado desde 14.

---

## 1️⃣ FASE 1 — Crear tu repositorio (10 min)

1. Crea un repositorio público en GitHub con el nombre:

```
evaluacion-administracion-web-TU-NOMBRE
```

2. Sube los archivos del sitio base (los recibirás del docente).

3. Puedes usar `git` directamente o `gh repo create`.

**Comandos orientativos (puedes usar otra secuencia válida):**

```bash
git init
git add .
git commit -m "feat: inicio de evaluación"
gh repo create evaluacion-administracion-web-TU-NOMBRE --public --source=. --remote=origin --push
```

Si `gh` falla, también puedes hacer:

```bash
git remote add origin https://github.com/TU-USUARIO/evaluacion-administracion-web-TU-NOMBRE.git
git branch -M main
git push -u origin main
```

**Importante:** No se exige memorizar comandos. Si logras subir el código correctamente, está bien.

---

## 2️⃣ FASE 2 — Publicar con GitHub Pages (10 min)

1. Ve a **Settings → Pages** en tu repositorio.
2. En **Source**, selecciona `Deploy from a branch`.
3. Elige la rama `main` y la carpeta `/ (root)`.
4. Guarda.
5. Espera 1–2 minutos.
6. GitHub te dará una URL pública del tipo:

```
https://TU-USUARIO.github.io/evaluacion-administracion-web-TU-NOMBRE/
```

7. Verifica que el sitio cargue correctamente.
8. Copia esa URL al README.md.

---

## 3️⃣ FASE 3 — Auditar el sitio (15 min)

Abre la URL pública de tu sitio y utiliza:

- **Chrome DevTools** (F12)
  - Pestaña **Elements** → revisa el HTML.
  - Pestaña **Network** → observa los recursos que se cargan.
- **Lighthouse**
  - En Chrome DevTools, ve a la pestaña **Lighthouse**.
  - Selecciona **Performance** y haz clic en **Analyze page load**.
- **axe DevTools** (extensión del navegador)
  - Si tienes la extensión instalada, ábrela desde DevTools.
  - Haz clic en **Scan ALL of my page** para detectar problemas de accesibilidad.

**Tu objetivo:** encontrar **3 problemas reales** del sitio.

**Tipos de problemas que pueden existir:**
- Rendimiento (imágenes, scripts, métricas).
- Accesibilidad (imágenes sin `alt`, contraste, semántica).
- Mantenimiento (dependencias, `package.json`).
- Seguridad básica (parches).
- Administración (documentación, monitoreo, procedimientos).

---

## 4️⃣ FASE 4 — Crear 4 GitHub Issues (20 min)

Crea **EXACTAMENTE 4 Issues** en tu repositorio, una por cada problema detectado.

> ⚠️ El sitio tiene **15 problemas intencionales**. Tú solo necesitas identificar **4** bien analizados. No es necesario encontrarlos todos.

**Usa los templates** que el docente preparó en `.github/ISSUE_TEMPLATE/`:

- `rendimiento.md` → hallazgos de performance / Lighthouse
- `mantenimiento.md` → hallazgos de dependencias / seguridad
- `accesibilidad.md` → hallazgos de axe DevTools
- `general.md` → cualquier otro hallazgo

Para usar un template:

1. Ve a la pestaña **Issues** de tu repositorio.
2. Clic en **New issue**.
3. Selecciona el template que corresponda al área del hallazgo.
4. Completa cada sección del template.

**Contenido de cada Issue (definido en el template):**

```markdown
### Problema
¿Qué encontraste?

### Ubicación y reproducción
¿Dónde se encuentra? ¿Cómo reproducirlo o comprobarlo?

### Evidencia
Capturas, métricas, Lighthouse, DevTools Network, axe DevTools, código, etc.

### Concepto del curso relacionado
¿Qué concepto de Administración de Sitios Web se relaciona?
(VIVO/RÁPIDO/SEGURO, mantenimiento, LCP/INP/CLS/TTFB, etc.)

### Impacto
¿Por qué podría ser un problema? ¿A quién afecta?

### Severidad
- [ ] Baja
- [ ] Media
- [ ] Alta
Justificación breve:

### Solución propuesta (NO es necesario aplicarla en código)
¿Qué debería hacerse? Describe la corrección en texto.
```

**Importante:** No importa si clasificas exactamente igual que el docente. Lo que se evalúa es tu capacidad de **explicar** por qué lo clasificaste así.

---

## 5️⃣ FASE 5 — Documentar la solución propuesta (10 min)

**No es necesario aplicar las correcciones en el código.**

En cada Issue, completa la sección **"Solución propuesta"** describiendo en texto qué debería hacerse para resolver el problema encontrado.

**Ejemplos válidos (en texto, NO aplicar):**

- "Agregar atributos `width` y `height` a la etiqueta `<img>` del hero."
- "Añadir el atributo `defer` al `<script>` para que no sea bloqueante."
- "Actualizar `jquery` a una versión 3.x sin vulnerabilidades conocidas."
- "Cambiar el texto del footer por la fecha actual de mantenimiento."
- "Agregar atributo `alt` descriptivo a todas las imágenes del sitio."

**Lo que se evalúa es tu capacidad de analizar y proponer, no de codificar la corrección.**

---

## 6️⃣ FASE 6 — Completar el README (15 min)

Completa el archivo `README.md` respondiendo cada sección:

- VIVO
- RÁPIDO
- SEGURO
- Backup 3-2-1
- SLI
- SLO
- SLA
- Runbook — Sitio caído
- Problema corregido

**No necesitas respuestas perfectas.** Explica con tus palabras.

---

## 7️⃣ FASE 7 — Verificación final (5 min)

Antes de entregar, verifica:

- [ ] El repositorio es público.
- [ ] GitHub Pages está activo y la URL funciona.
- [ ] Creaste **exactamente 3 Issues**.
- [ ] Corregiste **al menos 1 problema**.
- [ ] Hiciste commit y push de los cambios.
- [ ] El README está completo.
- [ ] Las URLs de Issues y Pages están en el README.

---

## 📤 Entrega

Para entregar:

1. Asegúrate de que todos tus commits estén en `main` (push).
2. Envía al docente:
   - La **URL de tu repositorio**.
   - La **URL pública de GitHub Pages**.

---

## ⚖️ Reglas

- Evaluación individual.
- Se permiten apuntes y documentación oficial de GitHub.
- No se permite ayuda entre estudiantes.
- El docente puede resolver errores básicos de Git/GitHub, pero **no resolverá el problema que debes identificar**.
- No necesitas encontrar todos los problemas del sitio.
- No necesitas modificar el diseño visual.
- No necesitas programar funcionalidades nuevas.
- El repositorio debe ser público.

---

## 🆘 Si te quedas atascado

- Lee los mensajes de error completos.
- Ejecuta `git status` para ver el estado de tu repo.
- Consulta `docs.github.com` (en español).
- Pide ayuda al docente solo si es un problema técnico de Git/GitHub CLI, no conceptual.

¡Éxito! 🌿