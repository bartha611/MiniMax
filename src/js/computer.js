import { checkwin } from "./checkwin";
import { move, getOpenCells } from "./minimax";

export const computerTurn = (computer, board) => {
  const result = move(computer.symbol, board);
  const cell = document.getElementById(String(result));
  cell.innerHTML = `<div class="value">${computer.symbol}</div>`;
  document.getElementById("game-info").innerHTML = "Player's Turn";
  board[result] = computer;
  return false;
};
