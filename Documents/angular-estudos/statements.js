var text = "O Comercial terá mais um amistoso para avaliar o atual elenco que treina sob comando do técnico Pinho. O Leão do Norte enfrentará um combinado de jogadores da cidade de Cravinhos, na quinta-feira. A partida acontecerá às 18h, no estádio JD Martins, local onde o Alvinegro mandou seus jogos na Copa São Paulo de Futebol Júnior.";

var toHackerCase = function (text) {
	for(var i = 0;i < text.length; i++){
		//console.log(text.charAt(i));
		var hackerTextArray = [];
		if (text.charAt(i) === "o" ){
			hackerTextArray.push(0);
		}else {
			hackerTextArray.push(text.charAt(i));

		}
	}
	return hackerTextArray.join("");

};

console.log(toHackerCase(text));


