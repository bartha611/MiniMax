import { checkwin } from "./checkwin";
import { board } from "./index";
import { playerWins, turn } from "./index";

export let player = null;
export let computer = null;

export const takeCell = e => {
  const { id } = e.target;
  if (!id || !player || !turn) {
    return false;
  }
  const position = Number(id);
  if (board[position] !== "") {
    return false;
  } else {
    board[position] = player;
    turn = !turn;
    const gameInfo = document.getElementById("game-info");
    gameInfo.innerHTML = `<h5>Computer's Turn</h5>`;
    e.target.innerHTML = `<div class="value">${player}</div>`;
    if (checkwin(player, board)) {
      playerWins += 1;
      const playerHtml = document.getElementById("player");
      playerHtml.innerHTML = String(playerWins);
    }
  }
};
