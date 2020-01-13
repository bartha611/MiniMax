export const checkwin = (player, board) => {
  return checkRows(player, board) || checkColumns(player, board);
};

const checkRows = (player, board) => {
  for (let k = 0; k < 3; k++) {
    let row = [board[k], board[3 * k + 1], board[3 * k + 2]];
    if (row.filter(x => x !== player).length === 0) {
      return true;
    }
  }
  return false;
};

const checkColumns = (player, board) => {
  for (let k = 0; k < 3; k++) {
    let column = [board[k], board[k + 3], board[k + 6]];
    if (column.filter(x => x !== player).length === 0) {
      return true;
    }
  }
  return false;
};
