executando = false;


function reset(){
	//variaveis default
	velocidade = 10;
	corLetra = '#FFFFFF';
	corFundo = '#000000';
	tamLetra = '60';
	scroll_top = 0;

	var conteudo = $('#conteudo');
	var texto = $("#texto");

	conteudo.css({'color': corLetra, 'background-color': corFundo, 'font-size': tamLetra+'px'});

	texto.css({'margin-top': $(window).height(), 'margin-bottom': $(window).height()});

	if(executando)
	{
		pausar();
	}

	conteudo.scrollTop(0);

	//resetar formulario
	$("#corFundo").val(corFundo);
	$("#corLetra").val(corLetra);
	$("#tamLetra").val(tamLetra);
	$("#velocidade").val(velocidade);
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

	velocidade = valor;

	pausar();
	iniciar();

}


function iniciar(speed = velocidade){

	var conteudo = $("#conteudo");
	var texto = $('#texto');

	executando = true;

	intervalo = setInterval(function(){
		$("#conteudo").scrollTop(scroll_top);

		scroll_top = scroll_top + 1;

	}, speed);

}


function pausar(){
	clearInterval(intervalo);

	executando = false;
}


$(document).ready(function(){

	reset();

	var conteudo = $('#conteudo');
	conteudo.css({'height': $(window).height()});

});