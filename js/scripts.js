document.addEventListener('DOMContentLoaded', function () {

//scroll  librery init
  AOS.init();

  // Opciones del carrusel
  const carouselOptions = {
    indicators: true,
    numVisible: 5,
    padding: 15
  };

  // Inicializar sidenav (menú móvil)
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // Inicializar carrusel
  const carousel = document.querySelectorAll('.carousel');
  M.Carousel.init(carousel, carouselOptions);

});