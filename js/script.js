var executando = false,
scroll_top = 0,
padrao = ['#000000','#ffffff','60','10'];

function reset(){
	//variaveis default

	 var conteudo = $('#conteudo'), 
	 texto = $("#texto");

	conteudo.css({'color': padrao[1], 'background-color': padrao[0], 'font-size': padrao[2]+'px'});

	texto.css({'margin-top': $(window).height(), 'margin-bottom': $(window).height()});

	if(executando)
	{
		mover(false);
	}

	conteudo.scrollTop(0);


$('nav input[type=color],input[type=range]').each(function(index){
var input=$(this);
	input.val(padrao[index]);
});
}


function mudarCorFundo (cor){

	var conteudo = $("#conteudo");

	conteudo.css('background-color', cor);

}


function mudarCorLetra (cor){

	var conteudo = $("#conteudo");

	conteudo.css('color', cor);

}


function mudarTamLetra (tamanho){

	var conteudo = $("#conteudo");

	conteudo.css('font-size', tamanho+'px');

}


function mudarVelocidade(valor){

	var velocidade = valor;

	mover(false,velocidade);
	mover(true,velocidade);

}


function mover(status,speed = padrao[3]){

	var conteudo = $("#conteudo"),
	texto = $('#texto'),
	intervalo=setInterval(frame, speed);


	function frame(){
		if(executando == false){
			clearInterval(intervalo);
		}else{
			$("#conteudo").scrollTop(scroll_top);
			scroll_top = scroll_top + 1;

		}
	}
	executando=status;
}



$(document).ready(function(){

	reset();

	var conteudo = $('#conteudo');
	conteudo.css({'height': $(window).height()});



$('#textContent').click(function(){
	$('.modal-cover').fadeToggle();
});

$('.modal .btn-submit').click(function(){

var texto=$('#content').val();

$('#texto').text(texto);
$('.modal-cover').fadeToggle();
$('#content').val('');
});

$('.modal-cover').click(function(e){

	if(e.target !== this) return;

	$(this).fadeToggle();

});



});