//Type Of Funtions

//1.Named of fintion
function addNumber(num1,num2){
    return num1,num2
}

console.log(addNumber(10,20))

console.log("=====================")

//2.Anonymus fintion

let multipleNumbers=function(num1,num2){
    return num1*num2
}

console.log(multipleNumbers(10,20))

console.log("=====================")

//3.Arroy fintion
// let subNumbers=(num1,num2)=>{
//     return num1-num2
// }

// console.log(subNumbers(20,10))

// console.log("=====================")

let subNumbers=(num1,num2)=>num1-num2


console.log(subNumbers(20,10))

// console.log("=====================")

//4.Constructor fintion

function student(name,age,email){
    this.name=name
    this.age=age
    this.email=email
}

let student1=new student('chami',23,'shavishkachami@gmail.com')

console.log(student1)

console.log("=====================")

//5.CallBack fintion

function myFuntion(abc){
    // console.log(abc)
    console.log(typeof abc)
    if(typeof abc==='function'){
        abc()
    } else if(typeof abc==='object'){
        console.log(abc)
    }
    // abc()
}

let person={
    name:'chami',
    age:23
}

let NumbersArray=[1,2,3,4]

function secondFunction(){
    console.log('Second Funtion')
}
myFuntion(person)
myFuntion(secondFunction)

//5.Recursive fintion

function factorial(n){
    if(n==0){
        return 1
    }
    return n*(factorial(n-1))
}

console.log(factorial(5))