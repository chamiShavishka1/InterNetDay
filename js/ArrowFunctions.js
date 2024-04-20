// function addNumbers(num1, num2) {
//     return num1+num2
// }

// //Arrow Functions

// const addNumberArrow =(num1, num2) => {
//     return num1+num2
// }

// const addNumberArrows =(num1, num2) => num1+num2

// console.log(addNumbers(10,20));
// console.log(addNumberArrow(10,20));
// console.log(addNumberArrows(10,20));

// Converting Named Arrow funtion 
const addNumberArrow =(num1, num2) => num1+num2
console.log(addNumber(10,20))
console.log('===============')


//Converting costroutor function to arrow function
//Syntex wise this is posible 
//BUT DON'T DO THIS 
//Not support 'this', 'new' when using arrow funtions
// let student=(name,age,email) =>{
//     this.name=name
//     this.age=age
//     this.email=email
// }

// let student1=new student('chami',23,'shavishkachami@gmail.com')

// console.log(student1)

// console.log("=====================")

//Converting CalleBack function to arrow function
let myFuntion=abc=>{
     console.log(abc)
   
}

let secondFunction=()=>{
    console.log('Second Funtion')
}
myFuntion(person)
myFuntion(secondFunction)