var address = '';
var caminho = [];
var secaoAtual = '';
var secoes = ['home','a-gente-pensa-assim','por-que-estamos-aqui','nossa-historia','vai-um-app-ai','cases','clientes-e-parceiros','contato', 'trabalhe-conosco','our-mentality','what-are-we-here-for','our-history','how-about-an-app','costumers-and-partners','contact', 'join-our-team'];
var fotopen = false;
var alturaJanela = $(window).height();

$(document).scroll(function() {
	
		var scrollTop = $(this).scrollTop();
		var contentHeight = $('#main-container').height();
		var winHeight = $(window).height();
		var pct = scrollTop / (contentHeight-winHeight);
		
		$('.parallax').each(function(){
			var iniTop = Number ($(this).attr('data-itop'));	
			var deslocamento = Number ($(this).attr('data-desloc'));
			var move = iniTop-(deslocamento*pct);
			$(this).css({
					top: move
				});
		});
	
});

$(window).resize(function(){
	alturaJanela = $(window).height()-95;
	$('section#main').css("min-height", alturaJanela);
});

$(document).ready(function(){
	
	alturaJanela = $(window).height()-95;
	$('section#main').css("min-height", alturaJanela);

	$.address.externalChange(function (){
		trocaSecao();
	});
	
	$('#logo').click(function(){
		window.location = '#/home';
		$('header #nav span').animate({ borderTopColor: "#3f4752" }, 'fast');
		$('#nav-Home').animate({ borderTopColor: "#fff" }, 'fast');
		fechaHeader();
		rolaTopo();
	});
	
	$('header #nav span').click(function(){
		$('header #nav span').animate({ borderTopColor: "#3f4752" }, 'fast');
		$(this).animate({ borderTopColor: "#fff" }, 'fast');
 	});
	
	$('#nav-Home').click(function(){
		fechaHeader();
		window.location = '#/home';
		rolaTopo();
	});
	
	$('#nav-Sobre').click(function(){
		mudaHeader();
		$('.submenu-Sobre').delay(300).fadeIn(300);
		$('.submenu-Cases').fadeOut(300);
		$('.submenu-Contato').fadeOut(300);
	});
	
	$('#nav-Cases').click(function(){
		mudaHeader();
		$('.submenu-Sobre').fadeOut(300);
		$('.submenu-Cases').delay(300).fadeIn(300);
		$('.submenu-Contato').fadeOut(300);
	});
	
	$('#nav-Clientes').click(function(){
		fechaHeader();
		window.location = '#/clientes-e-parceiros';
		rolaTopo();
	});
	
	$('#nav-Clientes-En').click(function(){
		fechaHeader();
		window.location = '#/costumers-and-partners';
		rolaTopo();
	});
	
	$('#nav-Contato').click(function(){
		mudaHeader();
		$('.submenu-Sobre').fadeOut(300);
		$('.submenu-Cases').fadeOut(300);
		$('.submenu-Contato').delay(300).fadeIn(300);

	});
	
	var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $('.seta-open').css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
};

	
	$('#open_footer').click(function(){
		if(fotopen){
			$('#nav-footer').stop().animate({ bottom: -186 }, 'fast');
			$(this).stop().animate({top: -36}, 'fast');
			fotopen = false;
			rotation += 180;
			$('.seta-open').animate({top: 0}, 'fast');
			$(this).children('.seta-open').rotate(rotation);
		} else {
			$('#nav-footer').stop().animate({ bottom: 0 }, 'fast');
			$(this).stop().animate({top: -226}, 'fast');
			fotopen = true;
			rotation += 180;
			$('.seta-open').animate({top: 5}, 'fast');
			$(this).children('.seta-open').rotate(rotation);
		};
	});
	
	$('#nav-footer a').click(function(){
		$('#nav-footer').stop().animate({ bottom: -186 }, 'fast');
		$('#open_footer').stop().animate({top: -36}, 'fast');
		fotopen = false;
		rolaTopo();
	});
	
	$('.submenu a').click(function(){
		fechaHeader();
		rolaTopo();
	});
	
});

function abreSite(){
	address = $.address.value();
	caminho = address.split('/');
	var secaoExiste = false;
	var subSecaoExiste = false;
	
	if (caminho[1] == '') {
		window.location = '#/home';
		secaoAtual = 'home';
		secaoExiste = true;
	} else {
		
		if (caminho.length == 3){
			if (caminho[1] == 'cases'){
			$('#conteudo').fadeOut(300, function(){
				$.ajax({
				url: 'cases-single.php?case=' + caminho[2],
				success: function(data){
					$('#conteudo').html(data);
					$('#conteudo').fadeIn(300);
					$('#loading').fadeOut(300);
					$('#cabecalho').slideDown(400);
					}	
				});
			}			
			);

			} 

		subSecaoExiste = true
		}
		else {
			for (var i=0; i<secoes.length; i++){
		 	if (caminho[1] == secoes[i]) {
				secaoExiste = true;
				break; 
			}	
		}};
		
	}
	
	if (secaoExiste){
		secaoAtual = caminho[1];
	}
	else {
		secaoAtual = '404';	
	}

	if (subSecaoExiste == false) {
		$('#conteudo').fadeOut(300, function(){
			$.ajax({
			url: secaoAtual+'.php',
			success: function(data){
				$('#conteudo').html(data);
				$('#conteudo').fadeIn(300);
				$('#loading').fadeOut(300);
				$('#cabecalho').slideDown(400);
				}	
			})
		});
	}
}

function trocaSecao(){
	address = $.address.value();
	caminho = address.split('/');
	var secaoExiste = false;
	var subSecaoExiste = false;
	
	$('#loading').fadeIn(300);
	$('#cabecalho').slideUp(400)
	
	if (caminho[1] == '') {
		window.location = '#/home';
		secaoAtual = 'home';
		secaoExiste = true;
	} else {
		
		if (caminho.length == 3){
			if (caminho[1] == 'cases'){
			$('#conteudo').fadeOut(300, function(){
				$.ajax({
				url: 'cases-single.php?case=' + caminho[2],
				success: function(data){
					$('#conteudo').html(data);
					$('#conteudo').fadeIn(300);
					$('#loading').fadeOut(300);
					$('#cabecalho').slideDown(400);
					}	
				});
			}			
			);

			} 

		subSecaoExiste = true
		} else {
			for (var i=0; i<secoes.length; i++){
		 	if (caminho[1] == secoes[i]) {
				secaoExiste = true;
				break; 
			}	
		}};
		
	}

	if (secaoExiste){
		secaoAtual = caminho[1];
	}
	else {
		secaoAtual = '404';	
	}
	if (subSecaoExiste == false) {
		$('#conteudo').fadeOut(300, function(){
			$.ajax({
			url: secaoAtual+'.php',
			success: function(data){
				$('#conteudo').html(data);
				$('#conteudo').fadeIn(300);
				$('#loading').fadeOut(300);
				$('#cabecalho').slideDown(400);
				}	
			})
		});
	}
}

function mudaHeader(){
	$('header').stop().animate({ height: "105px" }, 300);
	$('#logo_full').stop().fadeIn(300);
};

function fechaHeader(){
	$('header').stop().delay(100).animate({ height: "56px" }, 300);
	$('#logo_full').stop().fadeOut(300);
	$('.submenu').stop().fadeOut(100);
};

function rolaTopo(){
$('html, body').animate({ scrollTop: 0 }, 300);
};
