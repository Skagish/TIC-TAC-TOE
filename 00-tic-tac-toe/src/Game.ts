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
    if (this.cells[6] === `O` && this.cells[7] === `O` && this.cells[8] === `O` && this.cells[8] !== `-`) {
      return this.cells[6]
    }
    if (this.cells[0] === `X` && this.cells[4] === `X` && this.cells[8] === `X` && this.cells[8] !== `-`) {
      return this.cells[0]
    }
    if (this.cells[0] === `O` && this.cells[4] === `O` && this.cells[8] === `O` && this.cells[8] !== `-`) {
      return this.cells[0]
    }
    if (this.cells[2] === `O` && this.cells[4] === `O` && this.cells[6] === `O` && this.cells[6] !== `-`) {
      return this.cells[2]
    }
    if (this.cells[2] === `X` && this.cells[4] === `X` && this.cells[6] === `X` && this.cells[6] !== `-`) {
      return this.cells[2]
    }
    if (this.cells[3] === `X` && this.cells[4] === `X` && this.cells[5] === `X` && this.cells[5] !== `-`) {
      return this.cells[3]
    }
    if (this.cells[3] === `O` && this.cells[4] === `O` && this.cells[5] === `O` && this.cells[5] !== `-`) {
      return this.cells[3]
    }
    if (this.cells[0] === `X` && this.cells[3] === `X` && this.cells[6] === `X` && this.cells[0] !== `-`) {
      return this.cells[3]
    }
    if (this.cells[0] === `O` && this.cells[3] === `O` && this.cells[6] === `O` && this.cells[3] !== `-`) {
      return this.cells[3]
    }
    if (this.cells[1] === `X` && this.cells[4] === `X` && this.cells[7] === `X` && this.cells[1] !== `-`) {
      return this.cells[1]
    }
    if (this.cells[1] === `O` && this.cells[4] === `O` && this.cells[7] === `O` && this.cells[1] !== `-`) {
      return this.cells[1]
    }
    if (this.cells[2] === `X` && this.cells[5] === `X` && this.cells[8] === `X` && this.cells[8] !== `-`) {
      return this.cells[2]
    }
    if (this.cells[2] === `O` && this.cells[5] === `O` && this.cells[8] === `O` && this.cells[8] !== `-`) {
      return this.cells[2]
    }
    if (this.isTie() == true){
      return "-"
    }
    
    return "-";
  }

  isTie(): boolean {
    var counter = 0;
    var result = false;
    this.cells.forEach(element => {
      if (element == "-"){
        return;
      }
      else{
        counter++;
      }
    });
    if (counter == 9) {
      result = true;
    }
    return result
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
