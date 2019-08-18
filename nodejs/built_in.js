console.log("math.PI", Math.PI);
console.log("Match.random()", Math.random());
console.log("Math.floor(3,9)", Math.floor(3.9));
console.log(" ");

var MyMath = {
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.PI", MyMath.random());
console.log("MyMath.PI", MyMath.floor(3.9));

MyMath_PI = Math.PI;
function MyMath_random(){
    return Math.random();
}
function MyMath_floor(val){

}