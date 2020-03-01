import { checkwin } from "./checkwin";

export const getOpenCells = board => {
  let answer = [];
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      answer.push(i);
    }
  }
  return answer;
};

export const move = (board, computer) => {
  const cells = getOpenCells(board);
  let scores = [];
  for (let cell of cells) {
    let newBoard = board.slice(0);
    newBoard[cell] = computer;
    scores.push(backtrack(computer, true, newBoard, 1));
  }
};

const backtrack = (computer, turn, board, depth) => {
  const user = ["x", "o"].filter(x => x !== computer)[0];
  let scores = [];
  const cells = getOpenCells(board);
  const currentPlayer = turn === true ? user : computer;
  const previousPlayer = ["x", "o"].filter(x => x !== currentPlayer)[0];
  if (checkwin(previousPlayer, board)) {
    return previousPlayer === computer ? 10 - depth : -10 + depth;
  } else if (cells.length === 0) {
    return 0;
  } else {
    for (let cell of cells) {
      let newBoard = board.slice(0);
      newBoard[cell] = currentPlayer;
      scores.push(backtrack(computer, !turn, newBoard, depth + 1));
    }
  }
  if (turn === true) {
    return Math.min(...scores);
  } else {
    return Math.max(...scores);
  }
};
