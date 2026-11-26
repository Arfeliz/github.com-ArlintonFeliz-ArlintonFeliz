# Estándares de Frontend

- Usa HTML semántico (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Evita estilos en línea (`style={{ ... }}`) salvo para valores dinámicos calculados.
- Asegúrate de que todos los botones y enlaces tengan estados visibles de `:hover`, `:focus-visible` y `:active`.
- Todas las imágenes deben tener atributo `alt` descriptivo y `loading="lazy"` (excepto la imagen principal del Hero).
- Usa diseño *mobile-first* y verifica que no exista scroll horizontal en pantallas de 375px.