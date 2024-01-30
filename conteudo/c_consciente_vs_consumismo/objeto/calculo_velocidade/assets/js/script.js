$(document).ready(function () {
    function escalaProporcao(largura, altura) {

        var larguraScreen = $(window).width();
        var alturaScreen = $(window).height();
        var proporcaoAltura = (alturaScreen * 100) / altura;
        var proporcaoLargura = (larguraScreen * 100) / largura;
        var proporcao, larguraAltura, larguraAlturaAuto;

        if (proporcaoAltura < proporcaoLargura) {
            larguraAltura = "height";
            larguraAlturaAuto = "width";
            proporcao = proporcaoAltura / 100;
        } else {
            larguraAltura = "width";
            larguraAlturaAuto = "height";
            proporcao = proporcaoLargura / 100;
        }

        return [proporcao, larguraAltura, larguraAlturaAuto];
    }

    function resizeBodyConteudo() {

        var proporcao1920 = escalaProporcao(1920, 1080)[0];

        $(".conteudo").css({
            "transform": "scale(" + proporcao1920 + ")",
            "transform-origin": "center center"
        });

        var proporcao900;

        if ($(window).width() < 992) {
            proporcao900 = escalaProporcao(900, 576)[0];
        } else {
            proporcao900 = 1;
        }
    }

    function audioClick() {
        $('.som-clique').on('click', function () {
            $('#somBotao')[0].play();
        });
    }

    // function controlarMusica(musica, botao) {
    //     var icone = botao.find('i');

    //     if (icone.text() === 'volume_off') {
    //         pausarTodasMusicas();
    //         icone.text('volume_up');
    //         musica.volume = 0.1;
    //         musica.play();
    //     } else {
    //         icone.text('volume_off');
    //         musica.pause();
    //         musica.currentTime = 0;
    //     }
    // }

    function telaCheia() {
        $('.btnFullScreen').on('click', toggleFullScreen);

        function toggleFullScreen() {
            var elem = document.documentElement;

            if (!document.fullscreenElement && !document.mozFullScreenElement &&
                !document.webkitFullscreenElement && !document.msFullscreenElement) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                    $('.btnFullScreen i').text('fullscreen');
                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    $('.btnFullScreen i').text('fullscreen_exit');
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        }
    }

    function hoverDasImagens() {
        $('.btn').hover(
            function () {
                var imgId = $(this).find('img').attr('id');
                $('#' + imgId).removeClass('d-none');
            },
            function () {
                var imgId = $(this).find('img').attr('id');
                $('#' + imgId).addClass('d-none');
            }
        );
    }

    function piscadinha() {
        $('.selecao').removeClass('d-none');
        setTimeout(function () {
            $('.selecao').addClass('d-none');
            setTimeout(function () {
                $('.selecao').removeClass('d-none');
                setTimeout(function () {
                    $('.selecao').addClass('d-none');
                }, 500);
            }, 500);
        }, 1000);
    }


    $(window).resize(function () {
        resizeBodyConteudo();
    });

    $('.exibir').click(function () {
        piscadinha();
    });

    hoverDasImagens();
    audioClick();
    resizeBodyConteudo();
    telaCheia();
});