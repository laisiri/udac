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

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];
/* Using map()
 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 */

//map() take all elements in array and return result with new array

let albumSalesStrings = musicData.map((e) => {
    return e.name + " by " + e.artist + " sold " + e.sales + " copies";
});
console.log(albumSalesStrings);
/* Array's filter() method is similar to the map() method:

It is called on an array
It takes a function as an argument
It returns a new array

he difference is that the function passed to filter() is used as a test, 
and only items in the array that pass the test are included in the new array.
*/

/* Using filter()
 *
 * Using the musicData array and filter():
 *   - Return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - Store the returned data in a new `results` variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 */

const results = musicData.filter((e) => {
    if(e.name.length >= 10 && e.name.length <= 25 ){

        return e;

    }
});

console.log(results);

//
/*

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/
function expandArray(){
    const myArray = [1,1,1];
    return function(){
        myArray.push("1");
        return myArray;
    }
    
}

console.log(expandArray());
