// BANER SLIDER
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// FIN BANNER SLIDER


 // ALERTA DE BIENVENIDA
window.alert("Bienvenido/a")


// LOGO PRECIONABLE
const $btnAbrir = document.getElementById("abrir-ventana");

$btnAbrir.addEventListener("click",e=>{
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0");
});

// ELIMINAR PARAFO
function borrarP(){
    const parrafoAEliminar = document.getElementById("eliminarP");
    parrafoAEliminar.remove();

}
// CAMBIAR COLOR DE PARAFFO
function cambiaColor() {
    const texto = document.getElementById("cambio_color");
    texto.style.color = "yellow";
}

// CAMBIAR COLOR DE PARAFFO
function cambiarFondo() {
    const body = document.body;
    const nuevoColor = "#800080"; 

    body.style.backgroundColor = nuevoColor;
}

// CARRUSEL

const mainContainer = document.getElementById("myCarousel");
      const mainOptions = {
        Dots: false
      };

      const mainCarousel = new Carousel(mainContainer, mainOptions);

      const navContainer = document.getElementById("myNavigation");
      const navOptions = {
        infinite: false,
        transition: false,
        center: true,
        fill: true,
        slidesPerPage: 1,
        dragFree: true,

        Dots: false,
        
        Sync: {
          target: mainCarousel,
        },
      };

      new Carousel(navContainer, navOptions);

      AOS.init();