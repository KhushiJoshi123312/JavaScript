let student ={
  name : "khushi",
  age  : 22,
  job : null
};

console.log(student)
console.log(student.name)//accessing only single value
console.log(student['name']) // accessing object
console.log(typeof student.name)
//----------FOR DELETING ------
delete student.age;
console.log(student) 
//-----------FOR ADDIING-----
student.collage ='AITR';
console.log(student)

