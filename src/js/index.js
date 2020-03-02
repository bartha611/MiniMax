import { computerTurn } from "./computer";
import { checkwin } from "./checkwin";
import { getOpenCells } from "./minimax";

export const computer = {
  symbol: null
};
export const player = {
  symbol: null
};
export const game = {
  board: ["", "", "", "", "", "", "", "", ""],
  pause: false,
  turn: Math.random() > 0.5
};

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
  if (game.board[position] !== "") {
    return false;
  } else {
    game.board[position] = player.symbol;
    game.turn = false;
    const gameInfo = document.getElementById("game-info");
    gameInfo.innerHTML = `<h5>Computer's Turn</h5>`;
    e.target.innerHTML = `<div class="value">${player.symbol}</div>`;
    if (checkwin(player.symbol, game.board)) {
      const playerWins = Number(document.getElementById("player").innerHTML);
      document.getElementById("player").innerHTML = String(playerWins + 1);
      game.pause = true;
    } else if (getOpenCells(game.board).length === 0) {
      const ties = Number(document.getElementById("tie").innerHTML);
      document.getElementById("tie").innerHTML = String(ties + 1);
      game.pause = true;
    }
  }
};
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", takeCell);
}

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

const ticTacToe = () => {
  if (!game.pause && !game.turn && computer.symbol) {
    delay(1000).then(() => {
      computerTurn(computer, game.board);
      if (checkwin(computer.symbol, game.board)) {
        const computerWins = Number(
          document.getElementById("computer").innerHTML
        );
        document.getElementById("computer").innerHTML = String(
          computerWins + 1
        );
        game.pause = true;
      } else if (getOpenCells(game.board).length === 0) {
        const ties = Number(document.getElementById("tie").innerHTML);
        document.getElementById("tie").innerHTML = String(ties + 1);
        game.pause = true;
      } else {
        game.turn = true;
      }
    });
  } else if (game.pause) {
    delay(1000).then(() => {
      game.board = ["", "", "", "", "", "", "", "", ""];
      game.turn = Math.random() > 0.5;
      document.getElementById("game-info").innerHTML =
        game.turn === true ? "Player's Turn" : "Computer's Turn";
      const cells = document.querySelectorAll(".cell");
      cells.forEach(cell => {
        cell.innerHTML = "";
      });
      game.pause = false;
    });
  }
};

setInterval(ticTacToe, 3000);
