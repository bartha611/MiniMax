import { checkwin } from "./checkwin";

export const getOpenCells = (board) => {
  let answer = [];
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      answer.push(i);
    }
  }
  return answer;
};

const getOptimalMove = (computer, scores, cells) => {
  let comparison =
    computer === "x" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
  let answer;
  for (let i = 0; i < cells.length; i++) {
    if (scores[i] > comparison && computer === "x") {
      answer = cells[i];
      comparison = scores[i];
    } else if (scores[i] < comparison && computer === "o") {
      answer = cells[i];
      comparison = scores[i];
    } else if (scores[i] === comparison && Math.random() > 0.5) {
      answer = cells[i];
    }
  }
  return answer;
};

export const move = (currentBoard, computer) => {
  let cells = getOpenCells(currentBoard);
  let scores = [];
  for (let cell of cells) {
    let newBoard = currentBoard.slice(0);
    newBoard[cell] = computer;
    scores.push(backtrack(computer, newBoard, 1));
  }
  return getOptimalMove(computer, scores, cells);
};

const backtrack = (player, board, depth) => {
  const currentPlayer = ["x", "o"].filter((x) => x !== player)[0];
  let scores = [];
  const cells = getOpenCells(board);
  const newDepth = depth + 1;
  if (checkwin(player, board)) {
    return player === "x" ? 10 - depth : -10 + depth;
  } else if (cells.length === 0) {
    return 0;
  }
  for (let cell of cells) {
    let newBoard = board.slice(0);
    newBoard[cell] = currentPlayer;
    scores.push(backtrack(currentPlayer, newBoard, newDepth));
  }
  return currentPlayer === "x" ? Math.max(...scores) : Math.min(...scores);
};
