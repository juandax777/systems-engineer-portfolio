# 🚀 INICIO RÁPIDO - 5 MINUTOS

## ⚡ Paso 1: Verificar Instalación

```bash
cd C:\Arquitectura\systems-engineer-portfolio
npm install
```

**Tiempo:** ~2 minutos

---

## 🌐 Paso 2: Ver en Navegador (Dev)

```bash
npm run dev
```

**Resultado:**
```
✔ Local:   http://localhost:3000/
```

**Abre el navegador:** http://localhost:3000/

**¿Qué ver?**
- ✅ Landing page hermosa con tu nombre
- ✅ Animaciones suaves
- ✅ Toggle de dark mode (arriba a la derecha)
- ✅ Menú de navegación
- ✅ Scroll through all sections
- ✅ Formulario de contacto
- ✅ Links a tu GitHub

**Tiempo:** ~30 segundos

---

## 🏗️ Paso 3: Build para Producción

```bash
# Ctrl + C para detener el servidor
# Luego:

npm run build
```

**Resultado:**
```
✓ 450 modules transformed.
✓ built in 1.73s

dist/index.html                   0.39 kB
dist/assets/index-*.css          36.17 kB → 5.76 kB (gzipped)
dist/assets/index-*.js          330.69 kB → 102.77 kB (gzipped)
```

**Carpeta `dist/` lista para upload** ✅

**Tiempo:** ~5 segundos

---

## 🌍 Paso 4: Deploy en Vercel (RECOMENDADO)

```bash
npm install -g vercel
vercel
```

**Sigue los prompts:**
1. ✅ Conecta con GitHub
2. ✅ Autoriza Vercel
3. ✅ Select `systems-engineer-portfolio` repo
4. ✅ Deploy automático

**Resultado:**
```
🔗 Deployment Complete!
📝 https://systems-engineer-portfolio-juandax777.vercel.app
```

**Abre tu sitio en vivo** → URL mostrada en terminal ✅

**Tiempo:** ~3-5 minutos

---

## ✨ ¡LISTO!

Tu portafolio está en vivo y funcional.

### URLs

- **URL de Vercel:** `https://systems-engineer-portfolio-juandax777.vercel.app`
- **Tu GitHub:** `https://github.com/juandax777`
- **Proyectos vinculados:** Parqueadero, Gestionador-de-Apuestas, ClaseSoftspring

---

## 📝 Editar Contenido

### Cambiar tu información:

**Archivo:** `src/components/sections/Hero.tsx` (línea ~45)
```tsx
const Hero: React.FC = () => {
  // Edita aquí: nombre, headline, ubicación, etc.
```

**Archivo:** `src/components/sections/About.tsx` (línea ~50)
```tsx
// Edita educación y especialidades
```

**Archivo:** `src/components/sections/Skills.tsx` (línea ~8)
```tsx
// Edita habilidades por categoría
```

### Después de editar:

```bash
# El navegador se actualiza automáticamente en desarrollo
# Los cambios aparecen en ~1 segundo
```

---

## 🔄 Actualizar Deploy

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
```

**Vercel se actualiza automáticamente** (2-5 minutos) ✅

---

## 🎨 Cambiar Colores

**Archivo:** `tailwind.config.cjs`

```javascript
colors: {
  primary: '#4A90E2',      // ← Cambiar este color
  secondary: '#50E3C2',
  accent: '#D0021B',
}
```

Recarga la página para ver cambios.

---

## 🌙 Dark Mode

Ya está implementado automáticamente.
- Toggle en el Header (arriba a la derecha)
- Se adapta automáticamente a preferencias del sistema

---

## 📊 Performance

```
CSS:        5.76 KB (gzipped) ⚡
JS:       102.77 KB (gzipped) ⚡
Total:    ~108 KB (súper rápido)
```

**Verifica en:** Google PageSpeed → Tu URL

---

## ❓ Problemas Comunes

### Error: "npm: command not found"

PowerShell:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run dev
```

### Error: "Port 3000 already in use"

```bash
npm run dev -- --port 3001
```

### Los cambios no se reflejan

```bash
# Reinicia el servidor:
# Ctrl + C
npm run dev
```

---

## 📚 Documentación

Para más detalles, consulta:
- `README.md` → Resumen general
- `DEPLOYMENT.md` → Deploy en detalle
- `INSTRUCCIONES.md` → Desarrollo
- `FAQ.md` → Preguntas frecuentes
- `COMANDOS.md` → Referencia de comandos

---

## 🎯 Checklist Final

- [ ] `npm install` completado
- [ ] `npm run dev` funciona en localhost:3000
- [ ] Verifiqué todas las secciones
- [ ] Verifiqué dark mode
- [ ] `npm run build` generó dist/
- [ ] Deploy en Vercel funcionando
- [ ] Sitio vivo accesible
- [ ] Links a GitHub funcionales
- [ ] Compartí en LinkedIn ✨

---

## 🎉 ¡LISTO PARA IMPRESIONAR!

Tu portafolio está:
✅ Completo
✅ Optimizado
✅ En vivo
✅ Listo para mostrar a reclutadores y clientes

**¡Adelante! 🚀**

---

## 📞 Contacto en el Portafolio

Los visitantes pueden contactarte a través de:
- Email: rozojuanm10@gmail.com
- Teléfono: +57 322 4017 526
- LinkedIn: juan-david-rozo-fer
- GitHub: juandax777
- Formulario de contacto en la página

---

**Última actualización:** Abril 2026

**Hecho con ❤️ usando React + Vite + Tailwind CSS**
