import { createInterface } from "readline";

let readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

let readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
    });
  });
};

console.log("Enter your name");
let inputOfUser = await readLineAsync();
console.log("Your name is " + inputOfUser);



let field = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

for (let row = 0; row < array.length; row++) {

  let actualRow = field[row];
  for (let col = 0; col < actualRow; col++) {
      console.log(actualRow[col]);
    

        output =+ actualRow[col] + " ";

  }
        console.log(output);

  console.log(field[actualRow]);
}

    field[0][1] = 1;



    function checkWinner(board) 
      for (var row = 0; row < 3; row++) {
        if (board[row][0] != "" && board[row][0] == board[row][1] && board[row][1] == board[row][2]) {
          return board[row][0];
        }
      }

      for (var col = 0; col < 3; col++) {
        if (board[0][col] != "" && board[0][col] == board[1][col] && board[1][col] == board[2][col]) {
          return board[0][col];
        }
      }

      