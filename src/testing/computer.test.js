import { move } from "../js/computer";

describe("Minimax algorithm working properly", () => {
  let board;
  let player;
  let result;
  it("Algorithm chooses a win over blocking opponent", () => {
    board = ["x", "x", "", "o", "o", "", "", "", ""];
    player = "x";
    result = move(player, board);
    expect(result).toBe(2);
  });
  it("Algorithm works when stalemate present", () => {
    board = ["o", "x", "o", "x", "x", "", "x", "o", "x"];
    player = "o";
    result = move(player, board);
    expect(result).toBe(5);
  });
  it("algorithm correctly positions for a win", () => {
    board = ["o", "o", "x", "x", "", "o", "", "", "x"];
    player = "x";
    result = move(player, board);
    expect(result).toBe(6);
  });
});
