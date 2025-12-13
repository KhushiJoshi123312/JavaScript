function anofun(){
  console.log("hello");
}
console.log("before");
setTimeout(anofun,1000);
console.log("after");

console.log("before")
setTimeout(function(){
  console.log(`i am anonymous`);
},3000);
console.log("after");

const multiply = function(a,b){
  return a+b;
}
console.log(multiply(4,5));