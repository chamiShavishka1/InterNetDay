let student={}
console.log("Student:",student)
console.log("Type of student :", typeof student)

student={
   fristName:'Chami',
   lastName:'Shavishka',
   email:'shavishkachami@gmail.com',
   phoneNumber:'0712713088',
   age:23,
   isRegistered:true
}
console.log("Student:",student)

console.log("Student Email:",student.email)

console.log("Student Email:",student['email'])

student.age=20;

console.log("Student Age:",student.age)

console.log("Student:",student)