var LivingCreature = require("./living_creature")
module.exports = class Mul extends LivingCreature {
    constructor(x,y) {
       super(x,y);
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            if (grassArr.length < 10) {
                matrix[newY][newX] = 5
                matrix[this.y][this.x] = 1;
                let gr = new Grass(this.x, this.y)
                grassArr.push(gr)
            } else if (grassEaterArr.length < 10) {
                matrix[newY][newX] = 5
                matrix[this.y][this.x] = 2;
                let grEater = new GrassEater(this.x, this.y)
                grassEaterArr.push(grEater)
            }
            else if (PredatorArr.length < 5) {
                matrix[newY][newX] = 5
                matrix[this.y][this.x] = 3;
                let pred = new Predator(this.x, this.y)
                PredatorArr.push(pred)
            }
            else if (bombArr.length < 5) {
                matrix[newY][newX] = 5
                matrix[this.y][this.x] = 4;
                let bm = new Bomb(this.x, this.y)
                bombArr.push(bm)
            }
            this.x = newX
            this.y = newY
        }
    }
}