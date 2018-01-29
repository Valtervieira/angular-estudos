/*
propriedade __proto__ serve para fazer a heranca

outros meios de fazer 
Object.setProtoType(joao, homem);
Object.Create(homem)

*/

var homem = {
	sexo = " masculino"
};

var joao = {
	nome: "Joao", 
	idade: 20, 
};
Object.setProtoType(joao, homem);

var pedro = {
	nome: "Pedro", 
	idade: 15, 
	__proto__: homem
};


var marcelo = Object.Create(homem){
	nome: "MARCELO", 
	idade: 15
};


console.log (joao.sexo);
console.log (joao);
console.log (pedro.sexo);
console.log (pedro);


