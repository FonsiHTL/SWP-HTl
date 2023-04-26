let a = 4
let b = 5

function add(a,b) {
    console.log(a + b)
};
    add(19,11)

function subtract(a,b) {
    console.log(a - b)
};
    subtract(10,9)

function multiply(a,b) {
    console.log(a * b)
};
    multiply(5,5)

function supercalculation(a,b) {
    console.log((a + b) / 2 * a)
};
    supercalculation(1,2)



function printEasterDate(year) {
let N = year-1900;
let A = N % 19;
let B = Math.floor((7*A+1) /19);
let M = ((11*A+4-B) % 29);
let Q = Math.floor(N/4);
let W = (N+Q+31-M) % 7;
let P = 25-M-W;



if (P > 0) {
    console.log("Ostersonntag ist der " + P + ". April")
}
else {
    console.log("Ostersonntag ist der " + P + 31 + ". März")
}
};

printEasterDate(2024)
