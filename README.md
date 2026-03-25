# HiHub Global Website

Sitio web corporativo para HiHub Global Technologies - Conectando empresas latinoamericanas con fabricantes chinos verificados.

## Estructura del Proyecto

```
hihubglobal/
├── css/
│   ├── variables.css    # Variables CSS globales (colores, tipografía, spacing)
│   └── styles.css       # Estilos principales del sitio
├── js/
│   └── main.js          # JavaScript para interactividad (FAQ, forms, scroll)
├── images/              # Imágenes del sitio (placeholders para logos, equipo, hero)
├── includes/            # Archivos PHP reutilizables
└── index-es.php         # Página principal en español
```

## Mejoras Implementadas

### 🔴 Prioridad Alta

1. **Propuesta de Valor + CTA**
   - Headline mejorado: "Conectamos empresas latinoamericanas con fabricantes chinos verificados"
   - 3 diferenciadores destacados (precio competitivo, entrega rápida, proveedores verificados)
   - Botón CTA primario "Solicitar cotización gratis" con alto contraste
   - Responsive en desktop y móvil

2. **Trust Signals**
   - Sección "Nuestros resultados" con 3 métricas en stat cards
   - Grid de logos de clientes con placeholders
   - FAQ con acordeón vanilla JS (sin librerías externas)
   - Sección Equipo con cards de foto + nombre + cargo

### 🟠 Prioridad Media

3. **Sistema Visual UI**
   - Variables CSS en `:root` con colores primarios, secundarios, neutros
   - Google Font Inter para headings y body
   - Body text mínimo 16px
   - Spacing vertical mínimo 80px entre secciones

4. **Responsive y Performance**
   - Touch targets mínimo 44x44px en mobile
   - `loading="lazy"` en imágenes debajo del fold
   - `fetchpriority="high"` en imagen principal del hero
   - Etiquetas `<picture>` con soporte WebP
   - Meta viewport configurado
   - Formulario optimizado para móvil (inputs 16px+)

### 🟡 Prioridad Baja

5. **SEO On-Page**
   - Titles optimizados con keywords
   - Meta descriptions con máximo 155 caracteres
   - Jerarquía correcta H1 > H2 > H3
   - Schema Markup JSON-LD (Organization y Service)

6. **Flujo de Conversión 3 Niveles**
   - **FRÍO**: Banner "Guía gratuita: Cómo importar desde China sin perder dinero"
   - **TIBIO**: CTA secundario en servicios "Agenda una consulta gratuita de 30 minutos"
   - **CALIENTE**: Formulario mejorado con campos adicionales (tipo de producto, cantidad, presupuesto, país)

## Requisitos

- PHP 7.4+ (para el footer dinámico con fecha)
- Servidor web (Apache/Nginx)
- Navegador moderno con soporte CSS Grid/Flexbox

## Instalación Local

### Opción 1: PHP Built-in Server

```bash
cd /Users/manu/CascadeProjects/hihubglobal
php -S localhost:8000
```

Luego visita: http://localhost:8000/index-es.php

### Opción 2: Docker

```bash
docker run -d -p 8080:80 -v $(pwd):/var/www/html php:8.1-apache
```

Luego visita: http://localhost:8080/index-es.php

## Personalización

### Colores
Edita `css/variables.css`:
- `--color-primary`: Color corporativo principal
- `--color-action`: Color para CTAs (botones)

### Imágenes
Reemplaza los placeholders en la carpeta `images/`:
- `logo-cliente-1.png` a `logo-cliente-5.png` - Logos de clientes
- `team-1.jpg` a `team-4.jpg` - Fotos del equipo
- `hero-bg.jpg` - Imagen de fondo del hero
- `about-team.jpg` - Imagen de la sección nosotros

### Métricas (Stats)
Edita directamente en `index-es.php` las estadísticas en la sección "Nuestros resultados".

## Notas sobre SEO

Las meta tags y Schema Markup están configuradas para keywords:
- "importar desde China"
- "sourcing China Costa Rica" 
- "proveedores chinos verificados"

## Performance Optimizations

- Imágenes con lazy loading
- Soporte WebP con fallback
- CSS variables para mantenimiento
- JavaScript vanilla (sin dependencias)
- Touch targets optimizados para móvil

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+

## Contacto

Para soporte o modificaciones contactar al equipo de desarrollo.
