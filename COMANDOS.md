# 🎮 Scripts y Comandos Disponibles

## 📋 Package.json Scripts

### Desarrollo
```bash
npm run dev
```
Inicia servidor de desarrollo Vite en http://localhost:3000
- ✨ Hot module replacement (HMR) - cambios en tiempo real
- 🔄 Auto-refresh del navegador
- 💨 Compilación ultra-rápida (<100ms)

### Build Producción
```bash
npm run build
```
Genera build optimizado en carpeta `dist/`
- 📦 Minificación de CSS y JS
- 🗜️ Compresión GZIP (~108KB)
- 🎯 Tree-shaking (elimina código no usado)
- ⚡ Optimización de chunks

### Preview Local (Build)
```bash
npm run serve
```
Previsualiza el build de producción localmente
- 🔍 Verifica que todo funciona correctamente
- 📊 Prueba performance real

### Testing
```bash
npm run test
```
Ejecuta tests con Vitest
- ✅ Unit tests para componentes
- 📊 Coverage reports

---

## 🔧 Comandos Avanzados

### Instalar Nueva Dependencia
```bash
# Dependencia de producción
npm install nombre-paquete

# Dependencia de desarrollo (dev only)
npm install -D nombre-paquete

# Ejemplo: instalar componente UI
npm install @headlessui/react
npm install -D @types/node
```

### Limpiar Cache
```bash
# Eliminar node_modules e instalar de nuevo
rm -r node_modules package-lock.json
npm install

# En Windows (PowerShell)
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Verificar Dependencias Desactualizadas
```bash
npm outdated
```

### Actualizar Dependencias
```bash
# Actualizar todas (minor/patch)
npm update

# Actualizar a la última versión
npm install -D vite@latest
```

### Ver Información del Proyecto
```bash
npm list
npm list --depth=0
```

---

## 🌍 Comandos de Deployment

### Deploy en Vercel
```bash
npm install -g vercel
vercel
# Sigue los prompts interactivos
```

### Deploy en Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir dist
```

### Deploy en GitHub Pages
```bash
npm run build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

---

## 📦 Scripts adicionales (Si agregar)

### Format con Prettier
```bash
npm install -D prettier
npm run format
```

**En package.json:**
```json
"scripts": {
  "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,md}\""
}
```

### Lint con ESLint
```bash
npm install -D eslint eslint-plugin-react
npm run lint
```

**En package.json:**
```json
"scripts": {
  "lint": "eslint src/ --ext .ts,.tsx",
  "lint:fix": "eslint src/ --ext .ts,.tsx --fix"
}
```

### Type Check
```bash
npm run type-check
```

**En package.json:**
```json
"scripts": {
  "type-check": "tsc --noEmit"
}
```

---

## 💻 Troubleshooting de Comandos

### Error: "npm: command not found"

**Solución PowerShell:**
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run dev
```

**Solución CMD:**
```cmd
npm run dev
```

**Solución General (reinstalar npm):**
```bash
npm install -g npm@latest
npm run dev
```

### Error: "Port 3000 already in use"

```bash
# Usar otro puerto
npm run dev -- --port 3001

# O matar el proceso (Windows)
lsof -i :3000  # macOS/Linux
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess  # PowerShell

# Luego termina el proceso y reinicia
npm run dev
```

### Error: "Cannot find module"

```bash
# Limpia y reinstala
rm -r node_modules package-lock.json
npm install

# O instala la dependencia faltante
npm install nombre-paquete
```

### Cambios no se reflejan en Dev

```bash
# Reinicia el servidor
Ctrl + C  # Detener servidor
npm run dev  # Reiniciar

# O recarga el navegador forzadamente
Ctrl + Shift + R (Chrome/Firefox)
Cmd + Shift + R (macOS)
```

---

## 📊 Monitoreo de Performance

### Ver tamaño del bundle
```bash
npm install -D vite-plugin-visualizer
```

**En vite.config.ts:**
```typescript
import { visualizer } from 'vite-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ]
});
```

Luego:
```bash
npm run build
# Se abre reporte visual en navegador
```

---

## 📝 Guía Rápida de Desarrollo

```bash
# 1. Clonar repositorio
git clone https://github.com/juandax777/systems-engineer-portfolio.git
cd systems-engineer-portfolio

# 2. Instalar dependencias (una sola vez)
npm install

# 3. Iniciar desarrollo
npm run dev

# 4. Editar archivos en src/
# Los cambios se reflejan automáticamente en http://localhost:3000

# 5. Hacer build cuando esté listo
npm run build

# 6. Push a GitHub
git add .
git commit -m "Cambios realizados"
git push origin main

# 7. Deploy en Vercel/Netlify
# (Se activa automáticamente cuando haces push)
```

---

## 🎯 Checklist de Desarrollo

- [ ] Instalé dependencias: `npm install`
- [ ] Ejecuté dev server: `npm run dev`
- [ ] Verifiqué http://localhost:3000/
- [ ] Hice cambios en `src/`
- [ ] Actualicé información personal
- [ ] Ejecuté build: `npm run build`
- [ ] Verifiqué build: `npm run serve`
- [ ] Hice push a GitHub: `git push`
- [ ] Verifiqué deploy automático en Vercel/Netlify

---

**¡Listo para desarrollar! 🚀**
