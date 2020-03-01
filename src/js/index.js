import { computerTurn } from "./computer";
import { checkwin } from "./checkwin";
import { getOpenCells } from "./minimax";
import { reset } from "./game";

const turn = Math.random() > 0.5;

export const computer = {
  symbol: null
};
export const player = {
  symbol: null
};
export const game = {
  board: ["", "", "", "", "", "", "", "", ""],
  pause: false,
  turn
};

export let board = ["", "", "", "", "", "", "", "", ""];

let items = document.querySelectorAll(".cell");

const pickSymbol = e => {
  const { value } = e.target.dataset;
  player.symbol = value;
  computer.symbol = ["x", "o"].filter(x => x !== value)[0];
  document.getElementById("symbols").style.display = "none";
  document.getElementById("info-title").style.display = "none";
  document.getElementById("game-info").innerHTML =
    game.turn === true ? "Players's turn" : "Computer's Turn";
  return false;
};

let symbols = document.querySelectorAll(".symbol");
for (let item = 0; item < symbols.length; item++) {
  symbols[item].addEventListener("click", pickSymbol);
}

const takeCell = e => {
  const { id } = e.target;
  if (!id || !player.symbol || !game.turn) {
    return false;
  }
  const position = Number(id);
  if (board[position] !== "") {
    return false;
  } else {
    board[position] = player.symbol;
    game.turn = false;
    const gameInfo = document.getElementById("game-info");
    gameInfo.innerHTML = `<h5>Computer's Turn</h5>`;
    e.target.innerHTML = `<div class="value">${player.symbol}</div>`;
    if (checkwin(player, board)) {
      const playerWins = Number(document.getElementById("player").innerHTML);
      document.getElementById("player").innerHTML = String(playerWins + 1);
      game.pause = true;
    } else if (getOpenCells(board).length === 0) {
      const ties = Number(document.getElementById("tie").innerHTML);
      document.getElementById("tie").innerHTML = String(ties + 1);
      game.pause = true;
    }
  }
};
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", takeCell);
}

const ticTacToe = () => {
  if (!game.pause && !game.turn && computer.symbol) {
    setTimeout(() => {
      computerTurn(computer, board);
    }, 2000);
    if (checkwin(computer, board)) {
      const computerWins = Number(
        document.getElementById("computer").innerHTML
      );
      document.getElementById("computer").innerHTML = String(computerWins + 1);
      game.pause = true;
    } else if (getOpenCells(board).length === 0) {
      const ties = Number(document.getElementById("tie").innerHTML);
      document.getElementById("tie").innerHTML = String(ties + 1);
      game.pause = true;
    } else {
      game.turn = true;
    }
  } else if (game.pause) {
    setTimeout(() => {
      reset(board, turn);
    }, 1000);
    game.pause = false;
  }
};

setInterval(ticTacToe, 3000);
