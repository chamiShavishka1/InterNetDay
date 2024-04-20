console.log("Type of phone : " +typeof phone);

// 6. symbol
let symbolss = Symbol("fristName");
let symbols = Symbol("fristName");
console.log(typeof symbolss);
console.log(symbolss);
console.log('Is :'+symbolss.toString());

//7.BigInt
const number1=1243557665768674675685664n
const number2=100;

const result=number1+BigInt(number2);
console.log('Result:',result)