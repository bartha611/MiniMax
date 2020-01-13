import { checkwin } from "./checkwin";

let items = document.querySelectorAll(".cell");
let board = ["", "", "", "", "", "", "", "", ""];
let player = ["x", "o"][Math.floor(Math.random() * 2)];
let computer = ["x", "o"].filter(x => x !== player)[0];
let turn = Math.random() > 0.5;

const rowPostions = {
  top: 0,
  middle: 1,
  bottom: 2
};
const cellPositons = {
  left: 0,
  middle: 1,
  right: 2
};

const takeCell = e => {
  const { id } = e.target;
  console.log(e.target.dataset.value);
  if (!id || !turn) {
    return false;
  }
  const [x, y] = id.split("-");
  const row = rowPostions[x];
  const column = cellPositons[y];
  if (board[row][column]) {
    console.log("already taken");
    return false;
  } else {
    board[row][column] = "x";
    e.target.innerHTML = `<div class="value">${player}</div>`;
  }
};

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", takeCell);
}
