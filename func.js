//forEach() iterate through an array arr.forEach(function callback())
//logIfOdd() print number if it's odd

function  logIfOdd(num) {

    if(num%2 !== 0){

        return console.log(num);

    }
    
}

let arr1 = [1,2,3,4,5,6,7,8,9];
//arr1.forEach(logIfOdd);
// another way you can use like this 
arr1.forEach((num) => {
    if(num%2 !== 0) {
        return console.log(num);
    }
}); 

console.log(`and this another way`);

[1,2,3,4,5,6,7,8,9].forEach(logIfOdd);