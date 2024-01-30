$(document).ready(function () {

  audioClick();

  $(function () {
    $(".section-hq:not(:first)").hide();

    $(".seta").click(function () {
      let destino_id = $(this).attr("href");

      $(this).closest(".seta").hide();
      $(destino_id).show();

    });
  });

});

function audioClick() {
  $('.som-clique').on('click', function () {
    $('#somBotao')[0].play();
  });
}