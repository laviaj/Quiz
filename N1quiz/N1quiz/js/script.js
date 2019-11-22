var perguntas,botaoProx,respostas;

var vetorperguntas =[
    "Qual seu estilo?",
    "Qual seu animal favorito?",
    "Qual sua viagem preferida?",  
    "Qual seu passeio preferido?", 
    "Como você é no ambiete de trabalho/estudo ?",
    "Qual sua comida favorita?",
    "Qual sua cor favorita ?",
    "Qual sapato mais combina com você ?",
    "Qual tatto tem  mais a ver com sua personalidade ?",
    "Qual você prefere?"  

];
var vetorespostaa = [
			"a)patricinha",
			"a)coelho",
			"a)Las Vegas",
			"a)parque",
			"a)cheia dos amigos",
			"a)macaron",
			"a)rosa",
			"a)alpargatas",
			"a)passaros",
			"a)livro"


		];
var vetorespostab = [
			"b)hiepe",
			"b)cachorro",
			"c)Nova York",
			"b)show rock",
			"b)isolada",
			"b)salada",
			"b)marom",
			"b)tenis",
			"b)amigas",
			"b)serie"


		];

var vetorespostac = [
			"c)romantica",
			"c)gato",
			"c)Paris",
			"c)calçada da fama",
			"c)poucos amigos",
			"c)japonesa",
			"c)vermelho",
			"c)salto rosa",
			"c)ancora",
			"c)filme"

		];

var vetorespostad = [
			"d)rock",
			"d)calopcita",
			"d)Hollywood",
			"d)piquinique",
			"d)tem amigos falsos",
			"d)hamburguer",
			"d)azul",
			"d)sapatilha",
			"d)frase",
			"d)novela"
		];

var cont = 1
var respostaa = 0
var respostab = 0
var respostac = 0
var respostad = 0
var respostae = 0

function verificar() {

	var respostaUsuario = document.querySelector(".resposta:checked").value
	console.log(respostaUsuario)

	if (cont < 10) {
		document.getElementById("perguntaID").innerHTML = vetorperguntas[cont]
		document.getElementById("letraa").innerHTML = vetorespostaa[cont]
		document.getElementById("letrab").innerHTML = vetorespostab[cont]
		document.getElementById("letrac").innerHTML = vetorespostac[cont]
		document.getElementById("letrad").innerHTML = vetorespostad[cont]

		if (respostaUsuario == 1) {
			respostaa += 1
		}
		if (respostaUsuario == 2) {
			respostab += 1
		}
		if (respostaUsuario == 3) {
			respostac += 1
		}
		if (respostaUsuario == 4) {
			respostad += 1
		}
		cont += 1
	}
	if (cont == 10) {
		vencedor()
		document.getElementById("geral").style.display = "none"
		document.getElementById("botaoP").style.display = "none"
	}
}

function vencedor() {
	x = respostaa
	y = respostab
	z = respostac
	u = respostad
	if ((x > y) && (x > z) && (x > u)) {
		document.getElementById("perguntaID").innerHTML = "seu estilo é patricinha,você gosta de usar mais coisas rosas é mimada e filhinha do papai."
	}
	if ((y > x) && (y > z) && (y > u)) {
		document.getElementById("perguntaID").innerHTML = "seu estilo é hippie, você é bem da natureza, prefere uma coisa mais simples."
	}
	if ((z > y) && (z > x) && (z > u)) {
		document.getElementById("perguntaID").innerHTML = "seu estilo é romantica, você é bem sonhadora,bastante criativa,carinhosa."
	}
	if ((u > y) && (u > z) && (u > x)) {
		document.getElementById("perguntaID").innerHTML ="seu estilo é rockeiro, você tem uma personalidade forte."

	}
}









