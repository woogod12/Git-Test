function Person(name, first, second){
    this.name=name;
    this.first=first,
    this.second=second
}

Person.prototype.sum = function(){
    return 'prototype : '+(this.first+this.second);
}

var k = new Person('kim', 20, 20);
k.sum = function(){
    return 'this : '+(this.first+this.second);
}
var lee = new Person('lee', 20, 30);

console.log("kim.sum()", k.sum());
console.log(" ");
console.log("lee.sum()", lee.sum());
console.log(" ");