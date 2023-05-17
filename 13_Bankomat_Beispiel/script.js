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

console.log("Enter your name");
let inputOfUser = await readLineAsync();
console.log("Your name is " + inputOfUser);


let running = true;
let balance = 0;

console.log("Wählen Sie die gewünschte Aktion aus");
console.log("1. Einzahlen");
console.log("2. Auszahlen");
console.log("3. Auszahlen und Einzahlen");
console.log("4. Ende");

