import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {   
    readline.question("", (userRes) => {
      resolve(userRes);
      //readline.close();
    });
  });
};

console.log("Bitte Ihren Namen eingeben:");
let inputOfUser = await readLineAsync();
console.log("Dein Benutzername ist " + inputOfUser);


let running = true;
let balance = 0;

console.log("Wählen Sie die gewünschte Aktion aus");
console.log("1 = Einzahlen");
console.log("2 = Auszahlen");
console.log("3 = Kontostand");
console.log("4 = Ende");

while (running){
  let action = await readLineAsync();
 

  if (action === "1"){
      console.log("Betrag, den Sie einzahlen möchten eingeben:")
      let deposit = await readLineAsync();
      balance += deposit;
      console.log("Sie haben " + deposit + " Euro eingezahlt.")
  }
  
  if (action === "2") {
    console.log("Betrag, den Sie abheben möchten eingeben:");
    let withdraw = await readLineAsync();
    if (withdraw <= balance) {
      balance -= withdraw;
      console.log("Sie haben " + withdraw + " Euro abgehoben.");
    } else {
      balance = 0;
      console.log("Nicht genug Geld auf dem Konto. Ihr Kontostand wurde auf 0 Euro gesetzt.");
    }
  }
  
  if (action === "3"){
      console.log("Ihr Kontostand beträgt: " + balance + " Euro.");
  }
  

  if (action === "4"){
      console.log("Tschüss Tschau Ammannbau!")
      running = false;
  }
  
}

readline.close();

