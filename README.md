# 👨‍💻 Juan David Rozo - Portafolio Profesional

> Ingeniero de Sistemas | Python, Datos & Cloud Computing (AWS/GCP)

![React](https://img.shields.io/badge/React-18.0+-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-4.0+-purple?style=flat-square&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0+-cyan?style=flat-square&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Portafolio profesional moderno, responsivo y con animaciones suaves. Diseñado para impresionar. Construido con React, Vite, Tailwind CSS y Framer Motion.

---

## ✨ Características Principales

- 🎨 **Diseño Moderno & Minimalista** - Interfaz limpia y profesional
- 📱 **Responsive Design** - Mobile-first, funciona en todos los dispositivos
- 🌙 **Dark Mode** - Tema oscuro/claro con toggle automático
- ⚡ **Rendimiento Optimizado** - Build de solo 102KB (gzipped)
- 🎬 **Animaciones Suaves** - Powered by Framer Motion
- 🔄 **SPA Navigation** - Navegación sin recargas (React Router)
- 🎯 **SEO Ready** - Meta tags y estructura semántica
- 📧 **Formulario de Contacto** - Con validación y feedback
- 🔗 **Links a Redes** - GitHub, LinkedIn, Email, Teléfono
- 📦 **Build Optimizado** - Listo para Vercel, Netlify, GitHub Pages

---

## 📂 Secciones del Portafolio

| Sección | Descripción |
|---------|-------------|
| **Hero** | Presentación profesional con CTA principal |
| **Sobre Mí** | Perfil, educación (Universidad Central, UPN) y especialidades |
| **Experiencia** | Timeline: Litigando.com (Dic 2023 - Jul 2025) |
| **Habilidades** | 7 categorías: Lenguajes, Backend, Datos/IA, BD, Cloud, Git, Idiomas |
| **Proyectos** | 3 proyectos destacados con links a GitHub |
| **Contacto** | Formulario + links: Email, Teléfono, LinkedIn, GitHub |

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ (o v22.11.0)
- npm v10.9.0+
- Git

### Installation & Running

```bash
# 1. Clonar repositorio
git clone https://github.com/juandax777/systems-engineer-portfolio.git
cd systems-engineer-portfolio

# 2. Instalar dependencias
npm install

# 3. Ejecutar desarrollo (auto-refresh en cambios)
npm run dev

# 4. Abre http://localhost:3000
```

### Build para Producción

```bash
# Generar build optimizado
npm run build

# Preview local del build
npm run serve

# Output: carpeta dist/ (lista para deploy)
```

---

## 🛠️ Stack Tecnológico

### Frontend
```json
{
  "react": "^18.0.0",              // UI Library
  "react-dom": "^18.0.0",          // DOM Rendering
  "react-router-dom": "^6.0.0",    // SPA Routing
  "typescript": "^4.0.0"           // Type Safety
}
```

### Styling & Animation
```json
{
  "tailwindcss": "^3.0.0",         // Utility-First CSS
  "framer-motion": "latest",       // Smooth Animations
  "react-icons": "latest"          // Icon Library
}
```

### Build & Dev
```json
{
  "vite": "^4.0.0",                // Lightning Fast Build
  "vite-plugin-react": "latest",   // React Support
  "typescript": "^4.0.0",          // TS Support
  "tailwindcss": "^3.0.0",         // Tailwind
  "postcss": "latest",             // CSS Transform
  "autoprefixer": "latest"         // Browser Prefix
}
```

---

## 📁 Estructura del Proyecto

```
systems-engineer-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer, Layout
│   │   ├── sections/       # Hero, About, Experience, Skills, etc.
│   │   ├── projects/       # ProjectCard component
│   │   └── ui/             # Reutilizables (Button, Card, etc.)
│   ├── pages/              # Home, Projects
│   ├── hooks/              # useTheme hook
│   ├── data/               # Data estática
│   ├── styles/             # globals.css + animaciones
│   ├── types/              # TypeScript types
│   ├── utils/              # Funciones auxiliares
│   ├── App.tsx             # Router y componentes principales
│   └── main.tsx            # Entry point
├── public/                 # Assets estáticos
├── dist/                   # Build optimizado (generado)
├── tailwind.config.cjs     # Tailwind config
├── vite.config.ts          # Vite config
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies
└── README.md               # Este archivo
```

---

## 🎨 Personalizacion

### Editar Información Personal

**Nombre, Email, Ubicación:**
- Archivo: `src/components/sections/Hero.tsx`

**Educación:**
- Archivo: `src/components/sections/About.tsx`

**Experiencia Laboral:**
- Archivo: `src/components/sections/Experience.tsx`

**Habilidades & Skills:**
- Archivo: `src/components/sections/Skills.tsx`

**Proyectos:**
- Archivo: `src/components/sections/ProjectsSection.tsx`

**Colores & Tema:**
- Archivo: `tailwind.config.cjs`

---

## 📊 Performance

**Build Metrics:**
- **CSS:** 36.17 KB (5.76 KB gzipped)
- **JS:** 330.69 KB (102.77 KB gzipped)
- **Total:** ~339 KB → ~108 KB (optimizado)
- **Build Time:** 1.73s
- **Modules:** 450 transformados

**Browser Support:**
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers modernos

---

## 🚀 Deployment

### Opción 1: Vercel (Recomendado) ⭐

1. Push a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. Deploy automático

**URL automática:** `systems-engineer-portfolio-juandax777.vercel.app`

### Opción 2: Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir dist
```

### Opción 3: GitHub Pages

```bash
npm run build
git add dist/
git commit -m "Deploy"
git push origin main
```

---

## 📈 Próximas Features

- [ ] Agregar certificaciones con más detalles
- [ ] Sección de blog/artículos
- [ ] Google Analytics integration
- [ ] Newsletter signup
- [ ] Testimonios/Recomendaciones
- [ ] Proyecto showcase con imagenes
- [ ] Resume/CV descargable (PDF)

---

## 🤝 Contribuir

Este es tu portafolio personal. Para actualizaciones:

1. Crea una rama: `git checkout -b feature/nueva-seccion`
2. Commit cambios: `git commit -m 'Add nueva-seccion'`
3. Push: `git push origin feature/nueva-seccion`
4. Open Pull Request (opcional)

---

## 📄 Licencia

MIT © 2026 Juan David Rozo Fernández

---

## 📞 Contacto

**Juan David Rozo Fernández**
- 📧 Email: [rozojuanm10@gmail.com](mailto:rozojuanm10@gmail.com)
- 📱 Teléfono: [+57 322 4017 526](tel:+573224017526)
- 💼 LinkedIn: [juan-david-rozo-fer](https://linkedin.com/in/juan-david-rozo-fer)
- 🐙 GitHub: [@juandax777](https://github.com/juandax777)
- 📍 Ubicación: Bogotá, Colombia

---

## 🙏 Agradecimientos

- [React](https://react.dev) - UI Library
- [Vite](https://vitejs.dev) - Build Tool
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icons

---

**Hecho con ❤️ usando React + Vite + Tailwind CSS**

Última actualización: Abril 2026

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by modern web design principles.
- Built with React, Vite, and Tailwind CSS.