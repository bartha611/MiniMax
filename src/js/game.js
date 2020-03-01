export const reset = (board, turn) => {
  board = ["", "", "", "", "", "", "", "", ""];
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.innerHTML = "shit";
  });
  turn = Math.random() > 0.5;
  document.getElementById("game-info").innerHTML =
    turn === true ? "Player's turn" : "Computer's turn";
};
