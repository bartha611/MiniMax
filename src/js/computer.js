import { checkwin } from "./checkwin";

export const minimax = (computer, board) => {
  let optimalMove = [];
  let maxScore = 0;
  let minScore = 0;
  const postions = [];
  for (let k = 0; k < 9; k++) {
    if (board[k] === "") {
      postions.push(k);
    }
  }
  for (let k = 0; k < postions.length; k++) {
    let newBoard = board;
    newBoard[postions[k]] = computer;
    if (checkwin(computer, newBoard)) {
      return postions[k];
    }
    let cellScore = backtrack(computer, newBoard);
  }
};

const backtrack = (character, board) => {
  let answer = 0;
  const points = character === "x" ? 10 : -10;
};
