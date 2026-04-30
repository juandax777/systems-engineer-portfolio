# ❓ Preguntas Frecuentes (FAQ)

## 🎯 Preguntas Generales

### ¿Cuánto tiempo tarda deployar?

**Vercel:** 2-5 minutos
**Netlify:** 3-8 minutos
**GitHub Pages:** 5-10 minutos

Una vez deployado, las actualizaciones son automáticas cuando haces push a GitHub.

---

### ¿Necesito pagar algo?

**No.** Todas las opciones de hosting son gratis:
- ✅ Vercel - Gratis para proyectos personales
- ✅ Netlify - Gratis con límite generous
- ✅ GitHub Pages - Gratis (parte de GitHub)

Opcional: dominio personalizado (~$10-15 USD/año)

---

### ¿Puedo editar después de deployar?

**Sí, perfectamente.** Pasos:

1. Edita archivos localmente
2. Haz `git push origin main`
3. El hosting se actualiza automáticamente

---

### ¿Cómo cambio colores del portafolio?

**Archivo:** `tailwind.config.cjs`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#4A90E2',      // Tu color principal
      secondary: '#50E3C2',    // Tu color secundario
      accent: '#D0021B',       // Tu color acento
    },
  },
},
```

También puedes editar en archivos de componentes directamente usando clases de Tailwind:
```tsx
<div className="bg-blue-500">  // Azul
<div className="bg-purple-600"> // Púrpura
<div className="bg-pink-500">   // Rosa
```

---

### ¿Cómo agrego una nueva sección?

**Ejemplo: Agregar "Certificaciones"**

1. **Crear archivo:** `src/components/sections/Certifications.tsx`

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const certs = [
    { name: 'AWS Solutions Architect', issuer: 'AWS', year: '2026' },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12">Certificaciones</h2>
        {certs.map((cert) => (
          <div key={cert.name} className="p-4 bg-gray-50 rounded-lg mb-4">
            <h3 className="font-bold">{cert.name}</h3>
            <p className="text-gray-600">{cert.issuer}</p>
            <p className="text-sm text-gray-500">{cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
```

2. **Importar en Home.tsx:**
```typescript
import Certifications from '../components/sections/Certifications';

export default const Home = () => (
  <div>
    {/* ... otras secciones ... */}
    <Certifications />
  </div>
);
```

3. **Agregar link en Header:** `src/components/layout/Header.tsx`
```typescript
{ label: 'Certificaciones', href: '#certifications' }
```

4. **Listo.** El nuevo link aparecerá automáticamente.

---

### ¿Cómo cambio la foto/avatar?

En `Hero.tsx` linea ~64, cambia el avatar:

```typescript
// Opción 1: Usar letras (actual)
<span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
  JR
</span>

// Opción 2: Usar imagen
<img src="tu-foto.jpg" alt="Avatar" className="w-full h-full rounded-full object-cover" />

// Opción 3: Usar emoji
<span className="text-5xl">👨‍💻</span>
```

---

## 🛠️ Problemas Técnicos

### Error: "npm: command not found"

**Windows PowerShell:**
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run dev
```

**Windows CMD:**
```cmd
npm run dev
```

Si sigue sin funcionar:
1. Descarga Node.js desde nodejs.org
2. Reinstala Node.js
3. Abre una nueva terminal
4. Intenta de nuevo

---

### Error: "Port 3000 already in use"

```bash
# Opción 1: Usar otro puerto
npm run dev -- --port 3001

# Opción 2: Matar el proceso anterior
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

---

### Error: Build falla

**Solución general:**
```bash
# 1. Limpia caché
rm -r node_modules package-lock.json

# 2. Reinstala
npm install

# 3. Intenta nuevamente
npm run build
```

**Si persiste:**
```bash
# Verifica la sintaxis TypeScript
npm run type-check

# Verifica que no hay conflictos de import
grep -r "from '.*'" src/
```

---

### Los cambios no se reflejan en desarrollo

```bash
# 1. Detén el servidor (Ctrl + C)

# 2. Limpia caché de Vite
rm -r .vite

# 3. Reinicia
npm run dev
```

---

### Dark mode no funciona

**Verifica:**
1. Que `tailwind.config.cjs` tenga: `darkMode: 'class',`
2. Que el toggle en Header esté activo
3. Que el HTML tenga clase `dark` cuando esté activado

**En Header.tsx**, verifica que cuando `isDark` es true:
```typescript
document.documentElement.classList.add('dark');
```

---

### Animaciones no funcionan

**Posibles causas:**

1. **Framer Motion no instalada:**
```bash
npm install framer-motion
```

2. **CSS de animaciones no cargado:**
Verifica que `src/styles/globals.css` esté importado en `main.tsx`

3. **Componentes no usan motion:**
```tsx
// Debe ser motion.div, no div
import { motion } from 'framer-motion';

<motion.div animate={{ opacity: 1 }}>
  Contenido
</motion.div>
```

---

## 🚀 Deployment

### ¿Cómo verifico que el deploy funcionó?

Después de deployar:
1. Abre la URL del sitio (ej: `https://systems-engineer-portfolio-juandax777.vercel.app/`)
2. Verifica que cargue correctamente
3. Prueba dark mode
4. Abre formulario de contacto
5. Verifica links a GitHub

### ¿Cómo actualizo después del deploy?

```bash
# 1. Edita localmente
nano src/components/sections/Hero.tsx

# 2. Guarda y haz commit
git add .
git commit -m "Actualicé información"

# 3. Push a GitHub
git push origin main

# 4. ¡Listo! El sitio se actualiza automáticamente (5-10 minutos)
```

### ¿Cómo agrego un dominio personalizado?

**En Vercel:**
1. Dashboard → Settings → Domains
2. Ingresa tu dominio (ej: juandavidrozo.dev)
3. Sigue las instrucciones de DNS
4. Espera 5-48 horas para que se propague

**En Netlify:**
1. Site settings → Custom domains
2. Ingresa tu dominio
3. Sigue las instrucciones de DNS

---

## 📊 Performance

### ¿Cómo verifico la velocidad del sitio?

```bash
# Google PageSpeed
1. Abre https://pagespeed.web.dev
2. Ingresa URL de tu portafolio
3. Verifica scores

# O localmente
npm run build
npm run serve
# Abre DevTools (F12) → Lighthouse → Analyze page load
```

### ¿Es normal el tamaño del build?

**Sí, totalmente normal:**
- CSS: 5.76 KB gzipped ✅
- JS: 102.77 KB gzipped ✅
- **Total: ~108 KB** = Muy rápido

Para comparar:
- Portafolios mal optimizados: 500KB+
- El tuyo: 108KB = Excelente ⚡

---

## 💾 Git & GitHub

### ¿Cómo actualizo GitHub?

```bash
# 1. Ver cambios
git status

# 2. Agregar cambios
git add .

# 3. Commit con mensaje
git commit -m "Agregué certificaciones"

# 4. Push a main
git push origin main

# 5. Deploy se actualiza automáticamente
```

### ¿Cómo creo una rama nueva?

```bash
# Crear rama
git checkout -b feature/nueva-seccion

# Hacer cambios
# ... edita archivos ...

# Commit en nueva rama
git add .
git commit -m "Agregué nueva sección"

# Push de la rama
git push origin feature/nueva-seccion

# Crear Pull Request en GitHub (opcional)
```

### ¿Cómo reviso el historial de cambios?

```bash
# Ver últimos commits
git log

# Ver cambios no committed
git diff

# Ver cambios staged
git diff --staged
```

---

## 📱 Mobile & Testing

### ¿Cómo pruebo en mobile?

**Opción 1: DevTools del navegador**
- Chrome: F12 → Toggle device toolbar
- Firefox: F12 → Responsive Design Mode

**Opción 2: En tu teléfono real**
```bash
# En la terminal donde corre `npm run dev`, verá:
# ➜  Network: use --host to expose

# Abre: http://tu-ip-local:3000
```

**Opción 3: Después de deployar**
- Abre URL en tu teléfono
- Verifica que se vea correctamente

---

## 🔐 Seguridad

### ¿Es seguro mi información?

**Sí, totalmente seguro:**
- Email y teléfono están públicos (intentas es que te contacten)
- No hay datos sensibles
- Vercel/Netlify usan HTTPS automático
- Forma de contacto no envía datos (es solo local)

---

## 📞 ¿Necesitas más ayuda?

**Recursos útiles:**
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

**Para problemas específicos:**
1. Revisa los logs en la terminal
2. Consulta la documentación oficial
3. Busca en StackOverflow
4. Pregunta en comunidades de React/Vite

---

**¡Esperamos que tu portafolio sea un éxito! 🚀**
