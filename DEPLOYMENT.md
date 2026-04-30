# 🚀 Guía de Deployment - Systems Engineer Portfolio

Tu portafolio profesional está listo para ser desplegado en la nube. Elige una plataforma y sigue los pasos.

---

## 📋 Requisitos Previos

- Cuenta en Vercel, Netlify o tu plataforma preferida
- Git instalado en tu máquina
- Código actualizado en GitHub (`juandax777`)

---

## ✨ Características del Portafolio

- ✅ **Diseño Moderno & Responsivo** - Mobile-first, funciona en todos los dispositivos
- ✅ **Animaciones Suaves** - Powered by Framer Motion
- ✅ **Dark Mode** - Tema claro/oscuro automático
- ✅ **SPA (Single Page App)** - Navegación sin recargas
- ✅ **Optimizado** - Build de 330KB (102KB gzipped)
- ✅ **SEO Ready** - Meta tags y estructura semántica
- ✅ **Formulario de Contacto** - Validación y feedback
- ✅ **Información Actualizada** - Datos reales de tu GitHub

### Secciones Incluidas:
- 🎯 **Hero** - Presentación profesional con CTA
- 👤 **Sobre Mí** - Educación y perfil profesional
- 💼 **Experiencia** - Timeline de trabajos (Litigando.com)
- 🛠️ **Habilidades** - Lenguajes, backend, datos, cloud, etc.
- 📁 **Proyectos** - Tus repositorios reales de GitHub (Parqueadero, Gestionador-de-Apuestas, etc.)
- 📧 **Contacto** - Formulario + links a redes sociales
- 🎨 **Header/Footer** - Navegación y enlaces rápidos

---

## 🔧 Opción 1: Deploy en Vercel (Recomendado)

**Vercel es la forma más rápida y fácil. Gratis para proyectos personales.**

### Paso 1: Conectar GitHub
1. Ve a [vercel.com](https://vercel.com)
2. Haz click en "Sign Up" → selecciona "Continue with GitHub"
3. Autoriza Vercel para acceder a tus repositorios

### Paso 2: Importar Proyecto
1. En tu dashboard de Vercel, haz click en "New Project"
2. Selecciona el repositorio `systems-engineer-portfolio` de tu GitHub
3. Vercel auto-detectará que es un proyecto Vite ✓

### Paso 3: Configuración
- **Build Command:** `npm run build` (ya pre-llenado)
- **Output Directory:** `dist` (ya pre-llenado)
- **Environment Variables:** No necesarias
- Click en "Deploy"

### Paso 4: Dominio Personalizado (Opcional)
1. En Settings → Domains
2. Conecta tu dominio personalizado (ej: mi-portafolio.com)
3. Sigue las instrucciones de DNS

**⏱️ Tiempo total: ~5 minutos**

**URL por defecto:** `systems-engineer-portfolio-juandax777.vercel.app`

---

## 🌐 Opción 2: Deploy en Netlify

### Paso 1: Conectar GitHub
1. Ve a [netlify.com](https://netlify.com)
2. Haz click en "Sign up" → "GitHub"
3. Autoriza Netlify

### Paso 2: Crear Nuevo Sitio
1. Click en "New site from Git"
2. Selecciona tu repositorio
3. Configura:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click en "Deploy site"

**⏱️ Tiempo total: ~3 minutos**

**URL por defecto:** `random-name-xxxxx.netlify.app`

---

## 📦 Opción 3: Deploy Manual en GitHub Pages

### Paso 1: Configurar vite.config.ts
```typescript
export default defineConfig({
  base: '/systems-engineer-portfolio/',
  // ... resto de config
});
```

### Paso 2: Generar Build
```bash
npm run build
```

### Paso 3: Subir a GitHub Pages
```bash
git add dist/
git commit -m "Build para GitHub Pages"
git push
```

### Paso 4: Configurar en GitHub
1. Ve a Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: /dist
5. Save

**URL:** `juandax777.github.io/systems-engineer-portfolio/`

---

## 🔄 Actualizar después del Deploy

Cada vez que hagas cambios locales:

```bash
# 1. Asegúrate de estar en la rama main
git checkout main

# 2. Haz tus cambios y commit
git add .
git commit -m "Descripción de cambios"

# 3. Push a GitHub
git push origin main
```

**Vercel/Netlify se actualizarán automáticamente** cuando hagas push a GitHub 🎉

---

## 🚦 Verificar el Deploy

Una vez desplegado, verifica que todo funciona:

- [ ] Landing page carga rápido
- [ ] Animaciones suaves
- [ ] Dark mode funciona
- [ ] Formulario de contacto responde
- [ ] Links a GitHub funcionan
- [ ] Responsive en mobile (F12 en navegador)
- [ ] SEO meta tags presentes

---

## 📊 Performance

**Métricas de Build:**
- **Size:** 330.69 KB (antes de gzipped)
- **Gzipped:** 102.77 KB (optimizado)
- **Modules:** 450 transformados
- **Build time:** 1.73s

---

## 🎯 Tips Finales

1. **Dominio Personalizado:** Considera comprar tu propio dominio (ej: juandavidrozo.dev) para más profesionalismo
2. **Analytics:** Agrega Google Analytics para trackear visitas
3. **Actualizaciones:** Agrega nuevos proyectos conforme completes más repositorios
4. **LinkedIn:** Comparte el link en tu perfil de LinkedIn
5. **CV:** Incluye el URL del portafolio en tu CV

---

## ❓ Troubleshooting

### "Build failed"
```bash
# Limpia y reinstala dependencias
rm -r node_modules package-lock.json
npm install
npm run build
```

### "Página en blanco en producción"
- Verifica que `base` en `vite.config.ts` sea correcto
- Ejecuta build localmente: `npm run build`

### "Links no funcionan"
- Asegúrate que todos los links usan rutas relativas (sin http://)

---

## 📞 Soporte

Si tienes problemas con el deploy:
1. Revisa la documentación oficial: [Vercel Docs](https://vercel.com/docs) | [Netlify Docs](https://docs.netlify.com)
2. Consulta los logs de build en el dashboard de tu plataforma
3. Verifica que tu `package.json` tenga todas las dependencias

---

**¡Tu portafolio está listo para impresionar! 🚀**
