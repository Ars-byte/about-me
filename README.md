# about-me

Minimalist and modular personal portfolio.

- **Live Site:** [https://ars-byte.github.io/about-me/](https://ars-byte.github.io/about-me/)

## Overview

A lightweight, zero-dependency SPA built with vanilla web technologies, featuring a warm coffee & cream palette over a dark interface.

## Project Structure

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

## Architecture

- **`index.html`**: Clean semantic entry point without inline styles or scripts.
- **`src/data/content.js`**: Single source of truth containing bio, projects, and bilingual i18n dictionaries (EN/ES).
- **`src/css/`**: Component-scoped styles with sharp Material elevation and coffee-toned tokens.
- **`src/js/app.js`**: State orchestrator handling hash routing (`#about`, `#projects`, `#social`) and i18n switching.
- **`src/js/components.js`**: Functional view renderers.
- **`src/js/counter.js`**: Numerical stat easing counter.
- **`src/js/matrix.js`**: Subtle background matrix rain using digits `6` and `7` on HTML5 Canvas.

## Featured Projects

- [cmuspp](https://github.com/Ars-byte/cmuspp): Keyboard-driven terminal music player in C++.
- [GenovaLauncher](https://github.com/Ars-byte/GenovaLauncher): Minecraft Bedrock Linux launcher in Python and Qt6.
- [Imgview](https://github.com/Ars-byte/Imgview): Fast TTY image viewer in C++.
- [Bigcrock](https://github.com/Ars-byte/Bigcrock): Disk usage tree analyzer in Go.

## License

MIT © [Ars-byte](https://github.com/Ars-byte)
