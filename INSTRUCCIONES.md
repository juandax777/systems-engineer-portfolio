# 📚 Instrucciones - Portafolio Profesional

## 🚀 Inicio Rápido

### 1. Instalar Dependencias
```bash
cd C:\Arquitectura\systems-engineer-portfolio
npm install
```

### 2. Ejecutar Desarrollo
```bash
npm run dev
```
Abre http://localhost:3000/ en tu navegador. Los cambios se reflejan automáticamente.

### 3. Build para Producción
```bash
npm run build
```
Genera carpeta `dist/` lista para deploy.

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx      ← Navegación + toggle dark mode
│   │   ├── Footer.tsx      ← Footer con links y copyright
│   │   └── Layout.tsx      ← Contenedor principal
│   ├── sections/
│   │   ├── Hero.tsx        ← Landing/Presentación
│   │   ├── About.tsx       ← Sobre ti + Educación
│   │   ├── Experience.tsx  ← Experiencia (Timeline)
│   │   ├── Skills.tsx      ← Habilidades por categoría
│   │   ├── ProjectsSection.tsx ← Proyectos principales
│   │   └── Contact.tsx     ← Formulario + Contacto
│   ├── projects/
│   │   └── ProjectCard.tsx ← Tarjeta individual de proyecto
│   └── ui/
│       ├── Button.tsx      ← Componente Botón reutilizable
│       ├── Card.tsx
│       ├── Icon.tsx
│       └── ThemeToggle.tsx
├── pages/
│   ├── Home.tsx            ← Página principal (todas las secciones)
│   └── Projects.tsx        ← Página de proyectos (SPA)
├── hooks/
│   └── useTheme.ts         ← Hook para tema oscuro/claro
├── data/
│   └── projects.ts         ← Data de proyectos (si necesitas)
├── styles/
│   └── globals.css         ← Estilos globales + animaciones
├── types/
│   └── index.ts            ← Types TypeScript
├── utils/
│   ├── analytics.ts        ← Función para analytics
│   └── formatters.ts       ← Funciones de formato
├── App.tsx                 ← Componente raíz
└── main.tsx                ← Entry point

public/
└── (assets aquí si los necesitas)

dist/
└── (build optimizado para producción)
```

---

## ✏️ Editar Contenido

### 📝 Cambiar tu Información Personal

**Archivo: `src/components/sections/Hero.tsx`**
```typescript
// Actualiza tu nombre, headline, ubicación, email, teléfono
Headline: Ingeniero de Sistemas | Python, Data & Cloud (AWS/GCP)
Email: rozojuanm10@gmail.com
Teléfono: +57 322 4017 526
```

**Archivo: `src/components/sections/About.tsx`**
```typescript
// Actualiza educación y especialidades
school: 'Universidad Central',
program: 'Ingeniería de Sistemas',
```

**Archivo: `src/components/sections/Experience.tsx`**
```typescript
// Edita tu experiencia laboral
title: 'Auxiliar de Desarrollo Operacional',
company: 'Litigando.com',
duration: 'Dic 2023 - Jul 2025',
```

**Archivo: `src/components/sections/Skills.tsx`**
```typescript
// Actualiza categorías y habilidades
skills: ['Python', 'Java', 'C', 'SQL', 'JavaScript', 'TypeScript'],
```

**Archivo: `src/components/sections/ProjectsSection.tsx`**
```typescript
// Edita tus proyectos
{
  name: 'Nombre del Proyecto',
  description: 'Descripción',
  technologies: ['Tech1', 'Tech2'],
  link: 'https://github.com/juandax777/repo',
}
```

### 🎨 Cambiar Colores

**Archivo: `tailwind.config.cjs`**
```javascript
// Edita colores principales
primary: '#4A90E2',      // Azul principal
secondary: '#50E3C2',    // Verde secundario
accent: '#D0021B',       // Rojo acento
```

### 🌙 Dark Mode

Ya está implementado. El toggle está en el Header.
Para forzar dark mode globalmente en `index.html`:
```html
<html class="dark">
```

---

## 📦 Dependencias Principales

```json
{
  "react": "^18.0.0",                    // UI Library
  "react-dom": "^18.0.0",                // DOM Rendering
  "react-router-dom": "^6.0.0",          // Routing (SPA)
  "tailwindcss": "^3.0.0",               // Styling
  "framer-motion": "latest",             // Animaciones ✨
  "react-icons": "latest",               // Iconos
  "vite": "^4.0.0",                      // Build tool
  "typescript": "^4.0.0",                // Type safety
}
```

**Para instalar nuevas dependencias:**
```bash
npm install nombre-paquete
npm install -D nombre-paquete-dev  # Dev only
```

---

## 🎯 Agregar Nueva Sección

### Ejemplo: Agregar sección de "Certificaciones"

**1. Crear archivo: `src/components/sections/Certifications.tsx`**
```typescript
import React from 'react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const certs = [
    {
      name: 'AWS Cloud Solutions Architect',
      issuer: 'AWS',
      date: '2026',
      link: '#',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <motion.div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12">Certificaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert) => (
            <div key={cert.name} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg">{cert.name}</h3>
              <p className="text-gray-600">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
```

**2. Importar en `src/pages/Home.tsx`:**
```typescript
import Certifications from '../components/sections/Certifications';

// Agregar en el JSX:
<Certifications />
```

**3. Agregar link en Header:**
```typescript
{ label: 'Certificaciones', href: '#certifications' }
```

---

## 🚀 Deployment Opciones

### ✅ Opción 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
# Sigue los prompts
```

### ✅ Opción 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir dist
```

### ✅ Opción 3: GitHub Pages
Ver archivo `DEPLOYMENT.md` para instrucciones detalladas.

---

## 🔧 Troubleshooting Comunes

### Error: "npm not found"
```bash
# PowerShell: Temporal bypass
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run dev

# CMD: Usar directamente (sin issues)
npm run dev
```

### Error: "Port 3000 already in use"
```bash
# Usa otro puerto
npm run dev -- --port 3001
```

### Error: "Cannot find module"
```bash
# Reinstala dependencias
rm -r node_modules package-lock.json
npm install
```

### Dark mode no funciona
```bash
# Asegúrate que tailwind.config.cjs tiene:
darkMode: 'class',
```

---

## 📊 Monitoreo & Analytics

Para agregar Google Analytics:

**1. Crea cuenta en [analytics.google.com](https://analytics.google.com)**

**2. Instala el paquete:**
```bash
npm install react-ga4
```

**3. En `src/main.tsx`, agrega:**
```typescript
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX'); // Tu ID de GA
```

---

## 🎨 Personalización Avanzada

### Agregar Animaciones Personalizadas

**En `src/styles/globals.css`:**
```css
@keyframes mi-animacion {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.animate-mi-animacion {
  animation: mi-animacion 0.6s ease-out;
}
```

### Agregar Fuentes Personalizadas

**En `tailwind.config.cjs`:**
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['Fira Code', 'monospace'],
}
```

### Modo Offline

Para agregar service worker (PWA):
```bash
npm install -D vite-plugin-pwa
```

---

## 📈 Próximos Pasos

- [ ] Deploy en Vercel o Netlify
- [ ] Configurar dominio personalizado
- [ ] Agregar Google Analytics
- [ ] Agregar certificaciones
- [ ] Agregar sección de blog (opcional)
- [ ] Implementar newsletter signup
- [ ] Agregar testimonio de clientes
- [ ] SEO optimization (meta tags, sitemap)

---

## 📞 Contacto & Soporte

**Tu Portfolio:**
- GitHub: https://github.com/juandax777
- Email: rozojuanm10@gmail.com
- LinkedIn: juan-david-rozo-fer
- Teléfono: +57 322 4017 526

**Ubicación:** Bogotá, Colombia 📍

---

**¡A probar y deployar! 🚀**
