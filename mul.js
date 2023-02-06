class Mul {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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