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

let albumSalesStrings = musicData.map((e) => {
    return e.name + " by " + e.artist + " sold " + e.sales + " copies";
});
console.log(albumSalesStrings);