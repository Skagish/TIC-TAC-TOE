export type XO = "X" | "O" | "-";

export class Game {

  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {

    const countX = this.cells.filter(cell => cell === "X").length
    const countO = this.cells.filter(cell => cell === "O").length
    return countX === countO ? "X" : "O"

  }

  getWinner(): XO {
    if (this.cells[0] === `X` && this.cells[1] === `X` && this.cells[2] === `X` && this.cells[0] !== `-`) {
      return this.cells[0]
    }
    if (this.cells[0] === `O` && this.cells[1] === `O` && this.cells[2] === `O` && this.cells[0] !== `-`) {
      return this.cells[0]
    }
    if (this.cells[6] === `X` && this.cells[7] === `X` && this.cells[8] === `X` && this.cells[8] !== `-`) {
      return this.cells[6]
    }
    return "-";
  }

  isTie(): boolean {
    return false;
  }

  onClick(i: number): void {
    if (this.cells[i] !== "-") {
      return
    }
    this.cells[i] = this.getTurn()

  }


  restart(): void {
    console.log("restart called")
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  }
}
