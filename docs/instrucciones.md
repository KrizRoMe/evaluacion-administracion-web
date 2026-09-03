# Instrucciones para el estudiante — Evaluación Práctica 01

**Curso:** Administración de Sitios Web
**Duración total:** 90 minutos
**Modalidad:** individual
**Puntaje:** 4 Issues en el repo del docente × 5 pts = **20 pts**. Aprobado desde 14.

---

## 🎯 ¿Qué debes demostrar?

Que puedes realizar tareas básicas de administración de un sitio web:

1. Crear y administrar un repositorio Git/GitHub.
2. Utilizar GitHub CLI.
3. Publicar una página mediante GitHub Pages.
4. Inspeccionar una página web con Chrome DevTools.
5. Utilizar Lighthouse.
6. Utilizar axe DevTools.
7. Identificar **3 problemas reales** del sitio (uno de cada tipo).
8. Documentarlos con **3 Issues de hallazgos** en el repo del docente.
9. Clasificarlos (VIVO / RÁPIDO / SEGURO + tipo de mantenimiento).
10. Proponer soluciones en texto dentro de cada Issue (sin necesidad de aplicarlas en código).
11. Completar el README con conceptos administrativos.
12. Crear **1 Issue adicional** con el template `link-evaluacion.yml` para registrar tu link.

---

## 🧭 Flujo de la evaluación

```
1. Crear tu repositorio (10 min)
2. Publicar con GitHub Pages (10 min)
3. Auditar el sitio (15 min)
4. Crear 3 Issues de hallazgos en el REPO DEL DOCENTE (25 min)
5. Documentar la solución propuesta en cada Issue (10 min)
6. Crear la 4ª Issue con el template link-evaluacion (5 min)
7. Verificar todo (5 min)
```

> ⚠️ **Importante:** Las **4 Issues se crean en el repo del DOCENTE** (`KrizRoMe/evaluacion-administracion-web/issues`), NO en tu repo personal.

> ⚠️ El sitio contiene **15 problemas intencionales**. Tú solo necesitas identificar **3** (uno de cada tipo).

---

## 📦 Material permitido

- Tus apuntes de clase.
- Documentación oficial de GitHub (docs.github.com).
- Material entregado por el docente.
- Computadora con `git` y `gh` CLI configurados.

**No** se permite comunicación con otros estudiantes durante la evaluación.

---

## 🌐 Sitio entregado

El sitio se llama **EcoMarket** y tiene varios problemas intencionales.
- HTML, CSS y JavaScript vanilla.
- Múltiples secciones (hero, productos, ofertas, testimonios, blog, etc.).
- Funcionalidades JS reales (carrito, modo oscuro, búsqueda, etc.).

Debes auditarlo y encontrar **3 problemas reales**, uno de cada tipo:
- **Rendimiento** (Chrome DevTools + Lighthouse)
- **Accesibilidad** (axe DevTools)
- **Mantenimiento** (package.json + código)

---

## 1️⃣ FASE 1 — Crear tu repositorio (10 min)

1. Crea un repositorio **público** en GitHub con el nombre:
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

**Tu objetivo:** encontrar **3 problemas reales** del sitio (uno de cada tipo).

**Tipos de problemas que pueden existir:**

- **Rendimiento:** imágenes sin `width/height`, sin `loading="lazy"`, `<script>` sin `defer`, SVGs pesados, recursos bloqueantes.
- **Accesibilidad:** imágenes sin `alt`, botones sin `aria-label`, contraste insuficiente, inputs sin `<label>`, falta de landmarks ARIA.
- **Mantenimiento:** jQuery 2.1.4 (versión antigua), meta tags de seguridad faltantes, comentarios `TODO/FIXME`, footer desactualizado, falta de runbook público.

---

## 4️⃣ FASE 4 — Crear 3 Issues de hallazgos en el REPO DEL DOCENTE (25 min)

> ⚠️ **Estas 3 Issues NO se crean en tu repo personal. Se crean en el repo del docente.**

Crea **EXACTAMENTE 3 Issues** (una por cada tipo de problema detectado):

**Usa los templates** que el docente preparó en `.github/ISSUE_TEMPLATE/` del repo del docente:

- `rendimiento.yml` → hallazgos de performance / Lighthouse
- `accesibilidad.yml` → hallazgos de axe DevTools
- `mantenimiento.yml` → hallazgos de dependencias / seguridad

Para usar los templates:

1. Ve a la pestaña **Issues** del repo del docente:
   ```
   https://github.com/KrizRoMe/evaluacion-administracion-web/issues
   ```
2. Clic en **New issue**.
3. Selecciona el template que corresponda al área del hallazgo.
4. Completa cada sección del template.
5. Clic en **Submit (Crear)**.
6. Repite el proceso 2 veces más (1 issue por cada tipo).

**Contenido de cada Issue (definido en el template):**

```markdown
### Problema
¿Qué encontraste?

### Evidencia (MEDIR)
Herramienta usada, métrica o captura que demuestra el problema.

### Impacto
¿A quién afecta? ¿Qué consecuencia tiene?

### Solución propuesta (PROPONER + MEJORAR)
Describe en texto qué debería hacerse. NO es necesario aplicarla en código.

### Pilar de administración
- [ ] VIVO (disponibilidad)
- [ ] RÁPIDO (rendimiento)
- [ ] SEGURO

### Concepto del curso relacionado
Concepto específico de Administración de Sitios Web.

### Severidad
- [ ] Baja
- [ ] Media
- [ ] Alta
Justificación breve:

### Ciclo de mejora (opcional)
1. MEDIR: ¿Qué métrica/herramienta confirma el problema?
2. IDENTIFICAR: ¿Cuál es la causa raíz?
3. PROPONER: ¿Qué solución recomiendas?
4. MEJORAR: ¿Cómo se implementa?
5. VOLVER A MEDIR: ¿Cómo verificas que mejoró?
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

## 6️⃣ FASE 6 — Issue de link-evaluación (5 min)

Esta es la **4ª y última Issue**. Se crea también en el repo del docente, pero con el template `link-evaluacion.yml`.

**Pasos:**

1. En el repo del docente: Issues → New issue
2. Selecciona el template **🔗 Link de evaluación**
3. Completa:
   - Nombre completo
   - Link de tu repositorio
   - Link público de tu sitio
4. Clic en **Submit**

**Link directo:**
```
https://github.com/KrizRoMe/evaluacion-administracion-web/issues/new?template=link-evaluacion.yml
```

---

## 7️⃣ FASE 7 — Verificación final (5 min)

Antes de entregar, verifica:

- [ ] El repositorio es público.
- [ ] Pages funciona.
- [ ] Tengo **EXACTAMENTE 3 Issues de hallazgos** en el repo del docente (uno de cada tipo).
- [ ] Tengo **1 Issue de link-evaluación** en el repo del docente.
- [ ] Cada Issue de hallazgo tiene todas las secciones completas.
- [ ] El README está completo.
- [ ] Las URLs están en el README.

---

## 📤 Entrega

Para entregar, **NO envíes nada al docente**. El docente revisará directamente:

1. Tu repositorio (URL pública).
2. Tu GitHub Pages (URL pública).
3. Las **3 Issues de hallazgos** en `https://github.com/KrizRoMe/evaluacion-administracion-web/issues`.
4. La **Issue de link-evaluación** en el mismo repo.

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
- Las Issues se crean en el **repo del docente**, no en tu repo.

---

## 🆘 Si te quedas atascado

- Lee los mensajes de error completos.
- `git status` te muestra el estado.
- `docs.github.com` está en español.
- Pide ayuda al docente solo si es un problema técnico de Git/GitHub CLI, no conceptual.

¡Éxito! 🌿