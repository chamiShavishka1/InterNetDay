let number = 0;

if (number > 0) {
    console.log('positive number');
} else if  ( number < 0){
    console.log('negative number');
} else if (number == 0) {
    console.log('0');
}

// 2. switch
let dayOfWeek = 1;

switch(dayOfWeek) {
    case 1 : 
    dayOfWeek = 'Sunday'
    break
    case 2 : 
    dayOfWeek = 'Monday'
    break
    case 3 : 
    dayOfWeek = 'TuesDay'
    break
    case 4 : 
    dayOfWeek = 'WednsDay'
    break
    case 5 : 
    dayOfWeek = 'ThursDay'
    break
    case 6 : 
    dayOfWeek = 'FriDay'
    break
    case 7 : 
    dayOfWeek = 'SaterDay'
    break
    default : 'Invaild Day'
}

console.log(dayOfWeek);

// 3. loops

for (let i=0; i <=5 ; i++){
    console.log(i);
}

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}


let k = 0;
do {
    console.log(k);
    k++;
} while (k < 3);

// break

for (let n=0; n <=5 ; n++){
    if (n > 4) {
       break 
    }
    console.log(n);
}

for (let n=0; n <=5 ; n++){
    if (n ==3) {
       continue
    }
    console.log(n);

}

console.log('++++++++++++++++++++++');

// important

// == Vs === 
//== values deka withrai check krnne 
//=== values wla type ekath check krnwa


let num = '5';
if (num == 5) {
    console.log("Hey")
}

let nums = '5';
if (nums === 5) {
    console.log("Hey")
}

console.log('++++++++++++++++++++++')