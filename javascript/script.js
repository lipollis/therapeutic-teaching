/* *************************************************************************
            Espaço para o body.main
************************************************************************** */
jQuery(document).ready(function($){

    // Aplica a altura toda vez que a janela for redimensionada 
    $(window).resize(function(event){
  
      // Altura da Janela
      var windowHeight = $(window).height();
      
      // Altura do Cabeçalho (com margins e paddings)
      var headerHeight = $('header').outerHeight(true, true);
      
      // Altura do Rodapé (com margins e paddings)
      var footerHeight = $('footer').outerHeight(true, true);
      
      // Altura mínima calculada
      var contentHeight = Math.floor(windowHeight - headerHeight - footerHeight);
      
      // Aplica a altura mínima necessária para que o footer encoste na parte
      // inferior da janela
      $('section').css('min-height', contentHeight);
    
    }).resize(); // Executa o evento uma vez para que seja aplicada as correções
  
  });


/* *************************************************************************
            Carousel
************************************************************************** */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider-box");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("far fa-circle", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

