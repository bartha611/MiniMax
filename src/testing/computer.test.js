import { move, getOpenCells } from "../js/minimax";

describe("Minimax algorithm working properly", () => {
  let board;
  let player;
  let result;
  it("get open cells fucking piece of shit fucking motherfucker is fucking working", () => {
    board = ["", "", "", "", "", "x", "", "", ""];
    expect(getOpenCells(board)).toEqual([0, 1, 2, 3, 4, 6, 7, 8]);
  });
  it("Algorithm chooses a win over blocking opponent", () => {
    board = ["x", "x", "", "o", "o", "", "", "", ""];
    player = "x";
    result = move(board, player);
    expect(result).toBe(2);
  });
  it("Algorithm works when stalemate present", () => {
    board = ["o", "x", "o", "x", "x", "", "x", "o", "x"];
    player = "o";
    result = move(board, player);
    expect(result).toBe(5);
  });
  it("algorithm correctly positions for a win", () => {
    board = ["o", "o", "x", "x", "", "o", "", "", "x"];
    player = "x";
    result = move(board, player);
    expect(result).toBe(6);
  });
  it("algorithm correctly picks win over block", () => {
    board = ["o", "", "x", "", "o", "x", "", "", ""];
    player = "o";
    result = move(board, player);
    expect(result).toBe(8);
  });
});
