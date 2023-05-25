import { createInterface } from "readline";
let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];



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


  
  function checkWinner(board)