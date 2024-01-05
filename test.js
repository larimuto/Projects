function ticTacToe(moves) {
  const dashboard = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
  ];

  const checkWin = () => {
      // Check rows
      for (let i = 0; i < 3; i++) {
          if (dashboard[i][0] && dashboard[i][0] === dashboard[i][1] && dashboard[i][1] === dashboard[i][2]) {
              return dashboard[i][0];
          }
      }

      // Check columns
      for (let j = 0; j < 3; j++) {
          if (dashboard[0][j] && dashboard[0][j] === dashboard[1][j] && dashboard[1][j] === dashboard[2][j]) {
              return dashboard[0][j];
          }
      }

      // Check diagonals
      if (dashboard[0][0] && dashboard[0][0] === dashboard[1][1] && dashboard[1][1] === dashboard[2][2]) {
          return dashboard[0][0];
      }
      if (dashboard[0][2] && dashboard[0][2] === dashboard[1][1] && dashboard[1][1] === dashboard[2][0]) {
          return dashboard[0][2];
      }

      return null;
  };

  for (let i = 0; i < moves.length; i++) {
      const player = i % 2 === 0 ? 'X' : 'O';
      const [row, col] = moves[i];

      if (dashboard[row][col]) {
          console.log("This place is already taken. Please choose another!");
          return;
      }

      dashboard[row][col] = player;

      const winner = checkWin();
      if (winner) {
          console.log(`Player ${winner} wins!\n`);
          printDashboard();
          return;
      }
  }

  console.log("The game ended! Nobody wins :(");
}

function printDashboard() {
  console.log("Current state of the dashboard:");
  for (const row of dashboard) {
      console.log(row.map(cell => cell ? cell : ' ').join("\t"));
  }
}

// Example usage:
const moves = [[0, 0], [1, 1], [0, 1], [1, 0], [2, 2]];
ticTacToe(moves);
