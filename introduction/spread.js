//used of using something

const arr1 = [1,2,3,4];
let arr2 = [arr1]
console.log(arr1.length);
console.log(arr2.length);  //it show lenth 1 bcoz it take arr1 as single object

const arr3 = [1,2,3,4];
let arr4= [...arr3]
console.log(arr3.length);
console.log(arr4.length);

//OBJECT EXPANSION=====
const object1 ={a:2,b:2};
const object2 = {...object1,c:3}

console.log(object1)
console.log(object2)

//FUNCTION ARGUMENT
function sum(a,b,c){
  return a+b+c;
}
let number = [1,2,3,4]
console.log(sum(...number))