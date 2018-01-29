var regExp = /<table><tr><td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td><\/tr><\/table>/;
var telefone = "(48) 9999-9999";

console.log(regExp.test(telefone));
console.log(regExp.exec(telefone));



/*

\ = desmenbra  a regExp para usar caracteres especiais 
^ = Faz a obrigacao de comecar conforme a RexExp
$ = obriga a terminar conforme termina a expressao 


	Grupos de Caracteres 

	[abc] = aceita somente esses determinados caracteres
	[^abc] = nao aceita esses caracteres 
	[0-9] = esta dentro desse range 
	[^0-9] = nao esta dentro desse range 

	Quantificadores 

	{n} - Quantifica um numero especifico 
	{n,} - Quantifica um numero minimo
	{n, m} - Quantifica um intervalo entre os numeros especificos  

	Flexibilidade 

	? = zero ou um 
	* = zero ou mais 
	+ = um ou mais 

	Metacaracteres

	.  = Representa qaulquer caractere 
	\w = Representa qaulquer caractere 
	. = Representa qaulquer caractere 
	. = Representa qaulquer caractere 
	. = Representa qaulquer caractere 
*/