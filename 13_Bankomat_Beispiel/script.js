/*import { createInterface } from "readline";

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
*/
/*console.log("Enter your name");
let inputOfUser = await readLineAsync();
console.log("Your name is " + inputOfUser);


let running = true;
let balance = 0;

console.log("Wählen Sie die gewünschte Aktion aus");
console.log("1. Einzahlen");
console.log("2. Auszahlen");
console.log("3. Auszahlen und Einzahlen");
console.log("4. Ende");

*/
const readline = require('readline');

// Bankautomat-Simulation
let kontostand = 0; // Kontostand am Anfang ist 0

// Funktion zum Einzahlen
function einzahlen(betrag) {
  if (betrag > 0) {
    kontostand += betrag;
    console.log(`Du hast ${betrag} € eingezahlt.`);
  } else {
    console.log("Ungültiger Betrag. Bitte einen positiven Wert eingeben.");
  }
}

// Funktion zum Abheben
function abheben(betrag) {
  if (betrag > 0) {
    if (betrag <= kontostand) {
      kontostand -= betrag;
      console.log(`Du hast ${betrag} € abgehoben.`);
    } else {
      console.log("Nicht genügend Guthaben auf dem Konto.");
    }
  } else {
    console.log("Ungültiger Betrag. Bitte einen positiven Wert eingeben.");
  }
}

// Funktion zum Anzeigen des Kontostands
function kontostandAnzeigen() {
  console.log(`Dein aktueller Kontostand beträgt ${kontostand} €.`);
}

// Funktion zum Beenden des Programms
function beenden() {
  console.log("Bankautomat wird beendet. Vielen Dank!");
  process.exit(); // Programm beenden
}

// Hauptprogramm
function start() {
  console.log("Willkommen beim Bankautomat!");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("\nBitte wähle eine Option:\n1. Einzahlen\n2. Abheben\n3. Kontostand anzeigen\n4. Beenden\n", (option) => {
    switch (option) {
      case '1':
        rl.question("Betrag zum Einzahlen eingeben:", (einzahlenBetrag) => {
          einzahlen(parseInt(einzahlenBetrag));
          rl.close();
        });
        break;
      case '2':
        rl.question("Betrag zum Abheben eingeben:", (abhebenBetrag) => {
          abheben(parseInt(abhebenBetrag));
          rl.close();
        });
        break;
      case '3':
        kontostandAnzeigen();
        rl.close();
        break;
      case '4':
        beenden();
        rl.close();
        break;
      default:
        console.log("Ungültige Option. Bitte erneut wählen.");
        rl.close();
    }
  });
}

// Programm starten
start();

