# Workclothes — Evaluación Parcial 2 (Fullstack II)

Migración del sitio original HTML/CSS a React con Vite, React Router y Bootstrap. Mantiene la identidad visual y las imágenes de la entrega 1.

## Ejecutar

1. Instalar Node.js.
2. Abrir terminal en esta carpeta y ejecutar `npm install`.
3. Ejecutar `npm run dev` y abrir la dirección que muestra Vite.
4. Ejecutar `npm run build` para generar la versión de producción.
5. Ejecutar `npm test` para las 10 pruebas Jasmine/Karma (requiere Chrome o Chromium instalado).

## Funcionalidades

Tienda: inicio, catálogo, detalle, categorías, ofertas, carrito, registro, acceso, contacto, checkout y pantallas de pago exitoso/fallido. Panel administrativo: productos, categorías, usuarios, pedidos y reportes. Datos simulados y operaciones CRUD mediante localStorage. No existe pasarela de pago ni servidor real (el PDF solicita datos simulados).

## Acceso administrativo de demostración

Para ingresar al panel de demostración, usa **admin@workclothes.cl** y contraseña **admin123**. Esta cuenta solo existe en los datos simulados locales, no es segura para producción.

## Pruebas

`npm test` ejecuta Jasmine con Karma y Chromium en modo headless. En `src/tests/tienda.spec.js` se describen los 10 casos unitarios de CRUD y carrito. El formulario, navegación y DOM se pueden demostrar manualmente durante la presentación; la cobertura automatizada se limita a los módulos de lógica señalados en el informe.

## Documentos

La carpeta `documentos/` incluye los archivos originales de Evaluación 1, un ERS V2 y la cobertura de pruebas.
