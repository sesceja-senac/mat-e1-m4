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
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_html1.png')";
  }else if(pg_number == 2){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_html2.png')";
  }else if(pg_number == 3){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_html3.png')";
  }else if(pg_number == 4){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_ref.png')";
  }

});