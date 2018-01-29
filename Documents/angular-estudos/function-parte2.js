var counter = {
	value: 0, 
	add: function(){
		return ++this.value;
	}
};

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
	value : [], 
	add: function(item){
		this.value.push(item);
		return this.value;
	}
};

console.log(itens.add('A'));
console.log(itens.add('b'));
console.log(itens.add('c'));


var counter2 = {function(){
	var value1 = 0;
	return {
		add = function (){
		return ++value1;
		}
	};
}}{};


console.log(counter2.value);