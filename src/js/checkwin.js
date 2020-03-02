export const checkwin = (player, board) => {
  return (
    checkRows(player, board) ||
    checkColumns(player, board) ||
    checkDiagonals(player, board)
  );
};

const checkRows = (player, board) => {
  const checkBoard = board.slice(0);
  for (let k = 0; k < 3; k++) {
    let row = [checkBoard[3 * k], checkBoard[3 * k + 1], checkBoard[3 * k + 2]];
    if (row.filter(x => x !== player).length === 0) {
      return true;
    }
  }
  return false;
};

const checkColumns = (player, board) => {
  const checkBoard = board.slice(0);
  for (let k = 0; k < 3; k++) {
    let column = [checkBoard[k], checkBoard[k + 3], checkBoard[k + 6]];
    if (column.filter(x => x !== player).length === 0) {
      return true;
    }
  }
  return false;
};

const checkDiagonals = (player, board) => {
  let newBoard = board.slice(0);
  const diagonals = [
    [newBoard[0], newBoard[4], newBoard[8]],
    [newBoard[2], newBoard[4], newBoard[6]]
  ];
  for (const diagonal of diagonals) {
    if (diagonal.filter(x => x !== player).length === 0) {
      return true;
    }
  }
  return false;
};
