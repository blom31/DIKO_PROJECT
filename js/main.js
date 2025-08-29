// Inicializar AOS
AOS.init();

// Configuración de Lightbox
lightbox.option({
  resizeDuration: 200,
  wrapAround: true, // permite navegar en bucle (última → primera)
  alwaysShowNavOnTouchDevices: true,
  disableScrolling: true, // bloquea scroll de la página mientras ves la foto
  fadeDuration: 300,
  imageFadeDuration: 300,
});
