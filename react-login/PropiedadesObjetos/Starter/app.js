//object properties
var obj = {
	greet:"bye"
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = "greet";
console.log(obj[prop]);

var arr =[];

arr.push(function(greet){
	console.log(greet + ' world 1');
});

arr.push(function(greet){
	console.log(greet + ' world 2');
});

arr.push(function(greet){
	console.log(greet + ' world 3');
});


arr.forEach(function(item){
	item(obj.greet);	
});