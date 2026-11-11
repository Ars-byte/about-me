# about-me

Portfolio personal minimalista y modular de Ars-byte.

- **Sitio en vivo:** [https://ars-byte.github.io/about-me/](https://ars-byte.github.io/about-me/)

## Características

- Diseño minimalista con paleta en tonos café y crema sobre modo oscuro.
- Arquitectura SPA (Single Page Application) sin dependencias ni frameworks externos.
- Modularización limpia separada en capas de datos, lógica, efectos y presentación.
- Efecto de fondo sutil inspirado en cmatrix con números 6 y 7.
- Internacionalización completa con selector de idioma dinámico (Español / Inglés).
- Adaptación responsiva optimizada tanto para escritorio como para dispositivos móviles (Android / iOS).
- Código limpio y sin comentarios en archivos fuente.

## Estructura del proyecto

```text
about-me/
├── index.html
├── README.md
└── src/
    ├── css/
    │   ├── base.css
    │   └── components/
    │       ├── hero.css
    │       ├── layout.css
    │       └── sections.css
    ├── data/
    │   └── content.js
    └── js/
        ├── app.js
        ├── components.js
        ├── counter.js
        └── matrix.js
```

### Descripción de módulos

- **`index.html`**: Punto de entrada semántico. Carga tipografías (Outfit, JetBrains Mono), iconos de FontAwesome y los estilos modulares sin código inline.
- **`src/data/content.js`**: Única fuente de verdad de la información. Define el objeto global `window.SITE` con perfil, métricas numéricas, biografía, tecnologías, proyectos y diccionarios de traducción en español e inglés.
- **`src/css/base.css`**: Variables CSS globales (`--bg`, `--surface`, `--accent`, `--line`), reset de márgenes, contenedores y animación de entrada `.reveal`.
- **`src/css/components/layout.css`**: Estilos del navbar superior fijo con efecto blur, enlaces de navegación, botones con esquinas rectas (`border-radius: 0`) y pie de página.
- **`src/css/components/hero.css`**: Disposición y tipografía de los títulos principales, textos de presentación, bloques de estadísticas numéricas y avatar destacado.
- **`src/css/components/sections.css`**: Cuadrícula de 2x2 para proyectos con bordes acentuados, chips de tecnologías, contenedor de redes sociales y reglas responsivas para móviles.
- **`src/js/matrix.js`**: Efecto de lluvia digital en Canvas HTML5 usando caracteres `6` y `7` con opacidad tenue, trail suave y redimensionamiento dinámico.
- **`src/js/counter.js`**: Módulo de incremento numérico animado con función de desaceleración exponencial (`ease-out`) e IntersectionObserver.
