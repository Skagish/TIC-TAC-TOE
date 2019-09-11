import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be able to make move", () => {
    const game = new Game();

    game.onClick(0)

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);

  });
  it("should be able to switch turn", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  })

  it("if selected same, should not change", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(0);
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  })

  it("should win when first row filled with X", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  })

  it("should win when first row filled with O", () => {
    const game = new Game();

    game.onClick(3);
    game.onClick(0);
    game.onClick(4);
    game.onClick(1);
    game.onClick(8);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "O", "O", "O",
      "X", "X", "-",
      "-", "-", "X"
    ]);

    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  })

  it("should win when third row filled with X", () => {
    const game = new Game();

    game.onClick(6);
    game.onClick(3);
    game.onClick(7);
    game.onClick(4);
    game.onClick(8);

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "O", "O", "-",
      "X", "X", "X"
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  })

  it("should restart", () => {
    const game = new Game();

    game.onClick(6);
    game.onClick(0);
    game.onClick(7);
    game.onClick(1);
    game.onClick(8);

    expect(game.getCells()).toEqual([
      "O", "O", "-",
      "-", "-", "-",
      "X", "X", "X"
    ]);
    game.restart();
    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });
  it("should return game state draw", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(2);
    game.onClick(3);
    game.onClick(4);
    game.onClick(8);
    game.onClick(7);
    game.onClick(6);
    game.onClick(5);

    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "O", "X", "X",
      "O", "X", "O"
    ]);
    expect(game.isTie()).toBe(true);
  })

});
