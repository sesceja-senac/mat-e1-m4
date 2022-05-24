window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('.preloader').fadeOut(300);
    
  abrirConteudo();
})

function abrirConteudo() {
  $(".img-intro").addClass("animate__fadeIn animate__delay-1s")
  $(".intro h2").addClass("animate__fadeInDown animate__delay-2s")
  $(".intro .texto").addClass("animate__fadeIn animate__delay-3s")
  $(".tudo").addClass("animate__fadeIn animate__delay-4s")
  $(".tudoInternas").addClass("animate__fadeIn animate__delay-1s")
}