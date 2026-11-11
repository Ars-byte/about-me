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
