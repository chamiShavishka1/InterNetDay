let studentNames = ['Kamal','Amal','Nimal'];
console.log ('Student name : ', studentNames);

// building Function

console.log('================')
// 1. push (add elements to array end)
studentNames.push('John','Ravi');
console.log(studentNames);

console.log('================')

//2.pop (return last element and remove last element in array)
let popName = studentNames.pop();
console.log(popName);
console.log(studentNames);

console.log('================')

//3. shift(frist element return and remove frist element in array)
let shiftedName = studentNames.shift();
console.log(shiftedName);
console.log(studentNames);
console.log(studentNames[0]);

console.log('================')

//4. unshifed (add elements to array start)
studentNames.unshift('john','Saman');
console.log(studentNames);

console.log('================')

//5.concat (merge two arrays)
let maleNames = ['Chamu','Somapala','Gunapala'];
let femaleNames =['Sandeepa', 'Ravindi'];
let names = maleNames.concat(femaleNames);
console.log(names);

console.log('================')

//6. slice (api dena index eke idan thawa array ekak hadanwa)
let fruits = ['apple','mango','banana','orange'];
console.log(fruits.slice(0));
console.log(fruits.slice(1));
console.log(fruits.slice(2));

console.log('================')

// 7. splice (2 index eka thina element eka point krn eyge idan ekak ain wela api dena element ek e wenuwt replce wenw)
let fruitsArray = ['apple','mango','banana','orange'];
fruitsArray.splice(2,1,'mangoose');
console.log(fruitsArray);

console.log('================')

//8. reverse
let letters = ['a','b','c'];
console.log(letters.reverse());

console.log('================')

// 9. soat(accending wenn hdnw)
let numbers = [10,40,78,50,1000,100];
console.log(numbers.sort());
console.log(numbers.sort().reverse()); // decending

console.log('================')

let testingArray = ['kamal','namal',25];
console.log(testingArray);