let randomNumber = Math.random() * 100;
let random = Math.floor(randomNumber);

console.log(random);

let randomNumber2 = Math.random() * 100;
let random2 = Math.floor(randomNumber2);



if(random<50 && random<random2) {
    console.log ("Zahl 1 ist kleiner als Zahl 2 und Mini");
}

/*if(random<50 || random2<50) {
console.log ("Eine der beiden ist kleiner als 30");
}
*/

if(random<50 && random2!=50) {
console.log ("Erste Zahl klein, zweite kein 50iger");
}