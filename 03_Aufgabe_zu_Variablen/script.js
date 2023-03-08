let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.42;

let aweight = 0.34;
let bweight = 0.22;

console.log("Anzahl an Äpfel pro Kg " + 1 / aweight);
console.log("Anzahl an Bananen pro Kg " + 1 / bweight);
console.log("Preis pro Apfel " + applePricePerKilo*aweight)
console.log("Preis pro Banane " + bananaPricePerKilo*bweight)
console.log("Preis von 8 Äpfel " + applePricePerKilo*aweight*8)
console.log("Preis von 17 Bananen " + bananaPricePerKilo*bweight*17)
console.log("Preis von 1 Tonne Äpfel " + (applePricePerKilo*1000)*aweight)
console.log("Preis von 1 Tonne Banane " + (bananaPricePerKilo*1000)*bweight)
 