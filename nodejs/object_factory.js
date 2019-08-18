function Person(name, first, second){
    this.name=name;
    this.first=first,
    this.second=second,
    this.sum = function(){
        return this.first+this.second;
        }
}

var k = new Person('kim', 20, 20);
var lee = new Person('lee', 20, 30);

console.log("kim.sum()", k.sum());
console.log(" ");
console.log("lee.sum()", lee.sum());
console.log(" ");