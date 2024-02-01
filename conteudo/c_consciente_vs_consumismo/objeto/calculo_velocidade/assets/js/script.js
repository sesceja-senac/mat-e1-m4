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

    function reproduzirAudioAoAbrirModal(modalId, musicaId) {
        var modal = $('#' + modalId);
        var musica = $('#' + musicaId)[0];

        modal.on('shown.bs.modal', function () {
            if (musica && typeof musica.play === 'function') {
                musica.volume = 0.1;
                musica.play();
            }
        });

        modal.on('hidden.bs.modal', function () {
            if (musica && typeof musica.pause === 'function') {
                musica.pause();
            }
        });
    }

    reproduzirAudioAoAbrirModal('conteudoUm', 'musica1');
    reproduzirAudioAoAbrirModal('conteudoDois', 'musica2');
    reproduzirAudioAoAbrirModal('conteudoTres', 'musica3');
    reproduzirAudioAoAbrirModal('conteudoQuatro', 'musica4');
    reproduzirAudioAoAbrirModal('conteudoCinco', 'musica5');

    $('#music1').click(function () {
        controlarMusica(musica1, $(this));
    });

    $('#music2').click(function () {
        controlarMusica(musica2, $(this));
    });

    $('#music3').click(function () {
        controlarMusica(musica3, $(this));
    });

    $('#music4').click(function () {
        controlarMusica(musica4, $(this));
    });

    $('#music5').click(function () {
        controlarMusica(musica5, $(this));
    });

    function controlarMusica(musica, botao) {
        var icone = botao.find('i');

        if (icone.text() === 'volume_off') {
            pausarTodasMusicas();
            icone.text('volume_up');
            musica.volume = 0.1;
            musica.play();
        } else {
            icone.text('volume_off');
            musica.pause();
            musica.currentTime = 0;
        }
    }

    function pausarTodasMusicas() {
        $('.controle-som i').text('volume_off');
        musica1.pause();
        musica1.currentTime = 0;
        musica2.pause();
        musica2.currentTime = 0;
        musica3.pause();
        musica3.currentTime = 0;
        musica4.pause();
        musica4.currentTime = 0;
        musica5.pause();
        musica5.currentTime = 0;

    }

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