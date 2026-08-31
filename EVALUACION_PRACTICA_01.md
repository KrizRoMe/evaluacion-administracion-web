# Evaluación Práctica 01 — PPT para Estudiantes

> Este archivo contiene el contenido completo del PPT que se proyecta durante la evaluación. Útil también para imprimir o revisar sin proyector.

---

## 📌 Slide 1 — Portada

**EVALUACIÓN PRÁCTICA 01**
Administración y mantenimiento de un sitio web

- **Curso:** Administración de Sitios Web
- **Unidad:** 1
- **Duración:** 90 minutos
- **Escala:** 1 a 20 (aprobado desde 14)
- **Modalidad:** individual

---

## 📌 Slide 2 — ¿Qué debes demostrar?

**Competencias a evaluar:**

- Git y GitHub
- GitHub CLI
- GitHub Pages
- Chrome DevTools (Elements, Network)
- Lighthouse
- GitHub Issues
- Conceptos de mantenimiento web
- Conceptos de administración (VIVO / RÁPIDO / SEGURO)

**No se evalúa:** programación avanzada ni frameworks complejos.

---

## 📌 Slide 3 — Flujo de la evaluación

```
Código base
   ↓
Crear repositorio
   ↓
Publicar con GitHub Pages
   ↓
Auditar con DevTools / Lighthouse
   ↓
Crear 3 Issues
   ↓
Corregir al menos 1 problema
   ↓
Completar README
   ↓
Entregar
```

**Tiempo total:** 90 minutos.

---

## 📌 Slide 4 — Parte 1: Repositorio (10 min)

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

## 📌 Slide 5 — Parte 2: GitHub Pages (10 min)

**Activar GitHub Pages:**

1. Settings → Pages
2. Source: **Deploy from a branch**
3. Rama: `main`, carpeta: `/ (root)`
4. Guardar
5. Esperar 1–2 minutos

**Checklist:**
- ☐ Repo público
- ☐ Página publicada
- ☐ URL funcionando
- ☐ URL copiada al README

**URL típica:**
```
https://TU-USUARIO.github.io/evaluacion-administracion-web-TU-NOMBRE/
```

---

## 📌 Slide 6 — Parte 3: Auditoría (15 min)

**Herramientas a usar:**

- **Chrome DevTools** (F12)
  - Pestaña **Elements** → revisa el HTML
  - Pestaña **Network** → observa los recursos
- **Lighthouse** (en DevTools)
  - Pestaña **Lighthouse** → Performance → Analyze

**Objetivo:** encontrar **3 problemas reales**.

**Tipos de problemas que pueden existir:**
- Rendimiento (imágenes, scripts, métricas)
- Mantenimiento (dependencias)
- Seguridad básica (versiones, actualizaciones)
- Administración (documentación, procedimientos)

---

## 📌 Slide 7 — Parte 4: GitHub Issues (20 min)

**Crear EXACTAMENTE 3 Issues.**

**Formato sugerido por Issue:**

```markdown
### Problema
¿Qué encontraste?

### Evidencia
¿Dónde lo encontraste? (Lighthouse, Network, código, etc.)

### Impacto
¿Por qué podría ser un problema?

### Solución propuesta
¿Qué debería hacerse?

### Tipo de mantenimiento
- [ ] Preventivo
- [ ] Correctivo
- [ ] Adaptativo
- [ ] Perfectivo

### Pilar
- [ ] VIVO
- [ ] RÁPIDO
- [ ] SEGURO
```

---

## 📌 Slide 8 — Parte 5: Corregir al menos 1 problema (15 min)

**Ejemplos de corrección:**

- Agregar `width` y `height` a una imagen.
- Agregar `defer` al `<script>`.
- Actualizar una dependencia en `package.json`.
- Corregir texto en el footer.
- Agregar una sección al README.

**Después:**

```bash
git add .
git commit -m "fix: mejora sitio web"
git push
```

**Checklist:**
- ☐ Commit realizado
- ☐ Push realizado
- ☐ GitHub Pages sigue funcionando
- ☐ Issue actualizada (cerrada o comentada)

---

## 📌 Slide 9 — Parte 6: README administrativo (15 min)

**Completar el README con:**

- **VIVO** — ¿qué significa? ¿qué métrica?
- **RÁPIDO** — ¿qué significa? Menciona LCP, INP, CLS o TTFB
- **SEGURO** — menciona 2 acciones
- **Backup 3-2-1** — explica brevemente
- **SLI** — propone un indicador
- **SLO** — propone un objetivo
- **SLA** — explica qué es
- **Runbook** — 4 a 6 pasos para "sitio caído"
- **Problema corregido** — cuál Issue arreglaste

---

## 📌 Slide 10 — Checklist final

**Antes de entregar, verifica:**

- ☐ Repositorio público
- ☐ GitHub Pages funciona
- ☐ Tengo exactamente **3 Issues**
- ☐ Corregí **al menos 1 problema**
- ☐ Hice commit y push
- ☐ README completo
- ☐ URLs en el README

**Para entregar:**

- URL del repositorio: `https://github.com/...`
- URL de GitHub Pages: `https://...github.io/...`

---

## 📚 Notas adicionales (no proyectadas)

### Si te quedas atascado

- Lee los mensajes de error completos.
- `git status` te muestra el estado.
- `docs.github.com` está en español.
- Pide ayuda al docente solo si es un problema técnico de Git/GitHub CLI.

### Recordatorios importantes

- **No** necesitas encontrar **todos** los problemas del sitio.
- **No** necesitas programar funcionalidades nuevas.
- **No** necesitas modificar el diseño visual.
- **Sí** necesitas documentar tu trabajo con Issues.

### Tiempos por fase

| Fase | Tiempo |
|------|--------|
| Repositorio | 10 min |
| GitHub Pages | 10 min |
| Auditoría | 15 min |
| Issues | 20 min |
| Corrección | 15 min |
| README | 15 min |
| Verificación | 5 min |
| **Total** | **90 min** |

¡Éxito! 🌿