# Guía del Docente — Evaluación Práctica 01

> Esta guía contiene todo lo que el docente debe hacer antes, durante y después de aplicar la evaluación.

---

## 📋 ANTES de la evaluación

### 1. Preparar el repositorio base

1. Crea un repositorio **público** en tu cuenta de GitHub con un nombre identificable. Ejemplo:

   ```
   evaluacion-administracion-web-base
   ```

2. Sube los archivos del directorio `evaluacion-administracion-web/` **sin** la carpeta `docente/`:

   ```
   index.html
   styles.css
   script.js
   package.json
   .gitignore
   assets/hero.svg
   assets/producto-1.svg
   assets/producto-2.svg
   assets/producto-3.svg
   assets/producto-4.svg
   README.md
   docs/instrucciones.md
   docs/CHECKLIST.md
   ```

3. **NO subir** la carpeta `docente/` (es privada).

4. **NO subir** `EVALUACION_PRACTICA_01.md` ni `EVALUACION_PRACTICA_01.pptx` (materiales del docente).

### 2. Activar GitHub Pages en el repo base

1. En el repo base: **Settings → Pages**.
2. Source: **Deploy from a branch**.
3. Rama: `main`, carpeta: `/ (root)`.
4. Espera 1–2 minutos.
5. Verifica que el sitio cargue en una URL del tipo:

   ```
   https://TU-USUARIO.github.io/evaluacion-administracion-web-base/
   ```

6. **Importante:** abre esta URL y comprueba que:
   - Se ve el header verde.
   - Se ven los 4 productos.
   - El footer dice "Última actualización: hace mucho tiempo".
   - La consola del navegador no muestra errores graves.

### 3. Verificar que los problemas intencionales están presentes

Abre DevTools en el sitio publicado y comprueba:

| Problema | Cómo verificar |
|----------|----------------|
| Hero sin width/height | DevTools → Elements → buscar `<img src="assets/hero.svg">` |
| Producto-1 sin width/height | DevTools → Elements → primera tarjeta de productos |
| Script sin defer | DevTools → Elements → buscar `<script src="script.js">` |
| Dependencias antiguas | Abrir `package.json` en el repo |
| Footer desactualizado | DevTools → Elements → `<footer>` |
| README inicial sin procedimientos | Abrir `README.md` en el repo |

### 4. Preparar el material para los estudiantes

Necesitas entregar a los estudiantes:

- La **URL del repositorio base** (clonar).
- La URL de GitHub Pages del sitio base (opcional, como referencia).
- El PPT `EVALUACION_PRACTICA_01.pptx` proyectado.
- Las instrucciones escritas (`docs/instrucciones.md`).
- El checklist (`docs/CHECKLIST.md`).

### 5. Antes de empezar, verifica

- [ ] El repo base está público.
- [ ] GitHub Pages del repo base funciona.
- [ ] Los problemas intencionales están presentes.
- [ ] El sitio carga sin errores en consola.
- [ ] `gh CLI` está instalado en las PCs del laboratorio (o Git).
- [ ] Los estudiantes tienen cuenta de GitHub.
- [ ] Proyector/PPT listo.
- [ ] Cronómetro listo (90 minutos).

---

## ⏱️ DURANTE la evaluación

### Inicio (5 minutos)

1. **Saluda y explica el contexto:**
   > "Hoy van a aplicar la Evaluación Práctica 01. Es individual y dura 90 minutos."

2. **Proyecta el PPT** y avanza diapositiva por diapositiva.

3. **Entrega la URL del repositorio base** para que lo clonen o descarguen.

4. **Aclara las reglas clave:**

   > - "Tienen 90 minutos."
   > - "Pueden consultar apuntes y docs.github.com."
   > - "Crean su propio repositorio, no modifiquen el base."
   > - "Deben crear **EXACTAMENTE 3 Issues**."
   > - "Solo necesitan **corregir 1 problema**."
   > - "Lean `docs/instrucciones.md` para el flujo completo."

5. **Inicia el cronómetro.**

### Durante la evaluación

- El docente debe **circular** por el aula para detectar bloqueos tempranos.
- **Sí ayudar** con:
  - Errores de configuración de Git (no han hecho `git config user.name`).
  - Errores de `gh auth login`.
  - Problemas de autenticación con GitHub.
  - Errores de tipeo en comandos.

- **NO ayudar** con:
  - Decirles qué problemas tiene el sitio.
  - Sugerir qué Issues crear.
  - Indicar qué correcciones hacer.
  - Clasificar por ellos los problemas.

- Si un estudiante está bloqueado más de 10 min:
  - Preguntarle en qué fase está.
  - Verificar su `git status` y mensajes de error.
  - Si es un error técnico básico, ayudar.

### Si la evaluación se alarga

- A los 80 min, avisar: "Quedan 10 minutos."
- A los 88 min, avisar: "Quedan 2 minutos. Hagan commit y push de lo que tengan."
- A los 90 min, pedir entrega (URL del repo + URL de Pages).

---

## 📊 DESPUÉS de la evaluación

### 1. Recolección de entregas

Solicitar a cada estudiante:

- URL de su repositorio.
- URL de GitHub Pages.

Idealmente por un formulario, classroom de Google o mensaje privado.

### 2. Revisión

Para cada estudiante, abrir:

1. **Repositorio:**
   - Verificar commits.
   - Verificar Issues (deben ser **exactamente 3**).
   - Verificar README completo.
   - Verificar archivos del sitio.

2. **GitHub Pages:**
   - Verificar que la URL pública carga.

3. **Issues:**
   - Leer cada una.
   - Evaluar clasificación por la explicación.
   - Verificar evidencia.

4. **Commits:**
   - Verificar al menos 1 commit de corrección.
   - Verificar que el push haya subido los cambios.

5. **README:**
   - Verificar respuestas a VIVO, RÁPIDO, SEGURO.
   - Verificar 3-2-1, SLI, SLO, SLA.
   - Verificar Runbook (4–6 pasos).

### 3. Calificación

Usar `docente/RUBRICA.md` y `docente/CHECKLIST_CORRECCION.md`.

Total: /20.

### 4. Retroalimentación (opcional pero recomendado)

- Devolver a cada estudiante 1–2 fortalezas y 1–2 áreas de mejora.
- Si un estudiante sacó <14, ofrecerle una sesión de refuerzo antes de la próxima evaluación.

---

## 🚨 Problemas comunes y cómo resolverlos

### El estudiante no puede autenticarse con `gh`

- Verificar que tenga cuenta de GitHub.
- Ayudar con `gh auth login`.
- Si `gh` no funciona, indicarle que use `git` directamente + crear el repo desde la web.

### GitHub Pages no se activa

- Verificar que el repo sea público.
- Verificar que la rama `main` exista y tenga `index.html`.
- Esperar 2–3 minutos más.
- Verificar la pestaña **Actions** del repo por si hay errores de deploy.

### El estudiante subió solo parte del código

- Mostrarle `git status`.
- Ayudarlo a entender qué falta.
- Si no le alcanza el tiempo, evaluar lo entregado.

### Las Issues son muy vagas

- Aplicar rúbrica con criterio "Básico" (1 punto por Issue vaga).
- No rechazar la entrega por esto, pero sí reflejarlo en la calificación.

### Lighthouse da puntuaciones muy bajas por el equipo

- Recordar que la evaluación **no exige una puntuación específica**.
- Solo importa que el estudiante **use la herramienta** e **identifique problemas reales**.

---

## ✅ Lista final del docente

**Antes:**
- [ ] Repositorio base público.
- [ ] GitHub Pages del repo base funciona.
- [ ] PPT listo.
- [ ] `docs/instrucciones.md` listo para entregar.
- [ ] `docs/CHECKLIST.md` listo para entregar.

**Durante:**
- [ ] Cronómetro iniciado.
- [ ] Circular para detectar bloqueos.
- [ ] Ayudar con errores técnicos básicos.
- [ ] No resolver problemas conceptuales.
- [ ] Avisar a los 80 y 88 minutos.

**Después:**
- [ ] Recoger URLs.
- [ ] Aplicar rúbrica.
- [ ] Registrar calificaciones.
- [ ] Dar retroalimentación.

---

## 📚 Materiales para esta evaluación

Todos en el directorio del proyecto:

```
evaluacion-administracion-web/
├── README.md                          ← plantilla del estudiante
├── index.html, styles.css, script.js  ← sitio base
├── package.json                       ← dependencias intencionalmente antiguas
├── .gitignore
├── assets/                            ← imágenes
├── docs/
│   ├── instrucciones.md               ← instrucciones para estudiante
│   └── CHECKLIST.md                   ← checklist para estudiante
├── docente/
│   ├── RESPUESTAS_ESPERADAS.md        ← respuestas para el docente
│   ├── RUBRICA.md                     ← rúbrica de calificación
│   ├── GUIA_DOCENTE.md                ← este archivo
│   └── CHECKLIST_CORRECCION.md        ← checklist rápido de corrección
└── EVALUACION_PRACTICA_01.md          ← contenido del PPT
```