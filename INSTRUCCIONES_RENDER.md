# Instrucciones de Despliegue en Render

## ✅ Configuración Local Verificada

Tu proyecto React/Vite está correctamente configurado:

- ✅ `package.json` tiene los scripts correctos (dev, build, preview)
- ✅ `vite.config.ts` está configurado para React con alias correcto
- ✅ `index.html` está en la raíz del proyecto
- ✅ `src/main.tsx` es el entrypoint correcto
- ✅ `render.yaml` está configurado como sitio estático
- ✅ Build local funciona perfectamente: `npm run build`

---

## ⚠️ Problema: React Router + Render

Tu proyecto usa **BrowserRouter** con rutas (`/`, `/projects`). En un sitio estático, sin configuración adicional, al refrescar en `/projects` verás un error 404 porque el servidor no sabe que debe servir `index.html`.

**Tienes 2 opciones:**

---

## 🟢 OPCIÓN 1: Usar HashRouter (Recomendado - Sin Configuración)

Las URLs usarán `/#/projects` en lugar de `/projects`, pero funciona perfectamente sin configuración adicional.

### Pasos:

1. Abre [src/App.tsx](src/App.tsx)
2. Cambia:
```typescript
import { BrowserRouter as Router } from 'react-router-dom';
```
a:
```typescript
import { HashRouter as Router } from 'react-router-dom';
```
3. Sube los cambios a tu repositorio
4. Render redesplegará automáticamente

**Ventajas:** Sin configuración en Render, funciona al instante.
**Desventajas:** URLs con `#` (no es lo ideal SEO-wise, pero funciona).

---

## 🔵 OPCIÓN 2: Usar BrowserRouter + Configurar Rewrites en Render (URLs Limpias)

Mantiene URLs limpias (`/projects`), pero necesita configuración en Render.

### Pasos:

1. **En Render Dashboard:**
   - Ve a tu servicio "systems-engineer-portfolio"
   - Abre la pestaña **"Redirects/Rewrites"**
   - Crea una nueva regla:
     ```
     Source: /(.*)/.*
     Destination: /index.html
     Action: Rewrite
     ```
   - O simplemente:
     ```
     Source: /*
     Destination: /index.html
     Action: Rewrite
     ```

2. **Tu código React ya está listo** (usa BrowserRouter actualmente)

**Ventajas:** URLs limpias y profesionales.
**Desventajas:** Necesita configuración en Render.

---

## 🟡 OPCIÓN 3: Pequeño Servidor Node (Para URLs Limpias - Si Render No Configura Rewrites)

Si Render no permite rewrites fácilmente, puedes usar un servidor Express mínimo.

1. Crea `server.js` en la raíz:
```javascript
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos del directorio dist
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback: todas las rutas van a index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

2. En `package.json`, cambia el script `build` a:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "start": "node server.js",
  "preview": "vite preview",
  "test": "vitest"
}
```

3. En Render, cambia:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`

---

## 📋 Configuración Final en Render

### Para Opción 1 (HashRouter - Recomendada):

| Campo | Valor |
|-------|-------|
| **Type** | Static Site |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |
| **Root Directory** | `.` (raíz del proyecto) |

### Para Opción 2 (BrowserRouter + Rewrites):

| Campo | Valor |
|-------|-------|
| **Type** | Static Site |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |
| **Root Directory** | `.` (raíz del proyecto) |
| **Redirects** | Configura manualmente en Render Dashboard |

### Para Opción 3 (Servidor Node):

| Campo | Valor |
|-------|-------|
| **Type** | Web Service |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Port** | `3000` |

---

## ✨ Resumen de Cambios Realizados

1. ✅ **index.html** - Eliminada referencia incorrecta a estilos inline
2. ✅ **vite.config.ts** - Alias con ruta relativa correcta (evita problemas en producción)
3. ✅ **render.yaml** - Verificado como configuración estática correcta

---

## 🚀 Pasos Finales

1. Elige una opción (1, 2 o 3)
2. Si elegiste opción 1, ejecuta: `git add . && git commit -m "Use HashRouter for static deployment" && git push`
3. Si elegiste opción 3, crea `server.js` y sube los cambios
4. Render redesplegará automáticamente cuando detecte el push
5. Prueba: `npm run build` localmente y luego `npm run preview` para verificar

---

## ❌ Por Qué Fallaba Antes

Render detectó `render.yaml` como sitio estático ✅, pero sin configuración de rewrites o HashRouter, al refrescar en `/projects` Render buscaba un archivo físico `projects/index.html` que no existe.

La solución: **HashRouter (opción 1) o rewrites (opción 2)**.
