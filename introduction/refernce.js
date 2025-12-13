//-----OBJECT 1 IS SAME COPY OF OBJECT 2

let student={
name :'khushi',
age :  33
};
let num1 =10;
let num2 =  num1;
let student2 = student;
console.log(num2);
console.log(student2)
delete student.name;
console.log(num2);
console.log(student2)

