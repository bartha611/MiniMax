import { checkwin } from "../js/checkwin";

describe("checkwin function working properly", () => {
  let board;
  let player;
  let result;
  it("correctly outputs false when no win present", () => {
    board = ["x", "x", "", "o", "o", "", "x", "o", ""];
    player = "x";
    result = checkwin(player, board);
    expect(result).toBe(false);
  });
  it("correctly predicts a horizontal win", () => {
    board = ["x", "x", "x", "o", "o", "", "", "", ""];
    player = "x";
    result = checkwin(player, board);
    expect(result).toBe(true);
  });
  it("correctly predicts a diagonal win", () => {
    board = ["o", "x", "x", "", "o", "", "", "", "o"];
    player = "o";
    result = checkwin(player, board);
    expect(result).toBe(true);
  });
  it("correctly predicts a vertical win", () => {
    board = ["o", "x", "x", "o", "", "", "o", "", ""];
    player = "o";
    result = checkwin(player, board);
    expect(result).toBe(true);
  });
});
