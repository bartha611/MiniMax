import { move } from "./minimax";

export const computerTurn = (computer, board) => {
  const result = move(board, computer.symbol);
  if (!Number.isInteger(result)) {
    return false;
  }
  const cell = document.getElementById(String(result));
  cell.innerHTML = `<div class="value">${computer.symbol}</div>`;
  document.getElementById("game-info").innerHTML = "Player's Turn";
  board[result] = computer.symbol;
  return false;
};
