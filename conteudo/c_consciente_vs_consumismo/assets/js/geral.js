// caixas expansiveis
$('.caixa-container button.btpluscaixa').click(function () {
  let caixa = $(this).prev()
  if (caixa.hasClass('aberta')) {
    caixa.removeClass('aberta')
    $(this).css('background-image', 'url("assets/img/bt_mais2.png")')
  } else {
    caixa.addClass('aberta')
    $(this).css('background-image', 'url("assets/img/bt_menos2.png")')
  }
})


//---- Troca de BGs conforme página ----\\
jQuery("document").ready(function($){

  var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);

  //alert('Página: '+pg_number);

  if(pg_number == 1){
    //document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_html1.png')";
    $("body").addClass("bg-gradiente");
  }else if(pg_number == 2){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_html2.png')";
  }else if(pg_number == 3){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_html3.png')";
  }else if(pg_number == 4){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_ref.png')";
  }


  $(".btn-background").click(function(){
    if($(".btn-background").hasClass('bg-claro')){
      $(".btn-background").removeClass('bg-claro')
      $(".btn-background").addClass("bg-escuro");
      $(".layer-preta").css("display","block");
      $(".container").css("background","transparent");
      $("h2").css("color","#fff");
      $("h3").css("color","#fff");
      $("h4").css("color","#fff");
      $("h5").css("color","#fff");
      $("p").css("color","#fff");
      $("li").css("color","#fff");
      $("figcaption").css("color","#fff");
    }else if($(".btn-background").hasClass('bg-escuro')){
      $(".btn-background").removeClass('bg-escuro')
      $(".btn-background").addClass("bg-claro");
      $(".layer-preta").css("display","none");
      $(".container").css("background","#fff");
      $("h2").css("color","#000");
      $("h3").css("color","#000");
      $("h4").css("color","#000");
      $("h5").css("color","#000");
      $("p").css("color","#000");
      $("li").css("color","#000");
      $("figcaption").css("color","#000");
    }
  });

});