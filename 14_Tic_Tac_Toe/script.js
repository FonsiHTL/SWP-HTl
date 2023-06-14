import { createInterface } from "readline";

let readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
    });
  });
};


let field = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];


// Hazuptprogramm
console.log("Enter your name");
let inputOfUser = await readLineAsync();
console.log("Your name is " + inputOfUser);

field[0][1] = 1;
field[2][2] = 1;
field[1][1] = 1;

printField();


function printField(){
  for (let row = 0; row < field.length; row++) {
    let actualRow = field[row];
    let output="";
    for (let col = 0; col < field.length; col++) {
      
  
      output += field[row][col] + " | ";
    }
    console.log("x" + output);
  
   
  }
}

function checkWinner(board) {
  for (var row = 0; row < 3; row++) {
    if (
      board[row][0] != "" &&
      board[row][0] == board[row][1] &&
      board[row][1] == board[row][2]
    ) {
      return board[row][0];
    }
  }

  for (var col = 0; col < 3; col++) {
    if (
      board[0][col] != "" &&
      board[0][col] == board[1][col] &&
      board[1][col] == board[2][col]
    ) {
      return board[0][col];
    }
  }
}
