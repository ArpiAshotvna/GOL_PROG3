var LivingCreature = require("./living_creature")
module.exports = class Bomb extends LivingCreature{
    bomb() {
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 1) {
                    matrix[y][x] = 0
                    for (var i in grassArr) {
                        if (x == grassArr[i].x && y == grassArr[i].y) {
                            grassArr.splice(i, 1);
                            break;
                        }
                    }
                    this.die()
                }
                else if (matrix[y][x] == 2) {
                    matrix[y][x] = 0
                    for (var i in grassEaterArr) {
                        if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                            grassEaterArr.splice(i, 1);
                            break;
                        }
                    }
                    this.die()
                } else if (matrix[y][x] == 3) {
                    matrix[y][x] = 0
                    for (var i in PredatorArr) {
                        if (x == PredatorArr[i].x && y == PredatorArr[i].y) {
                            PredatorArr.splice(i, 1);
                            break;
                        }
                    }
                    this.die()
                }
            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in bombArr) {
            if (this.x == bombArr[i].x && this.y == bombArr[i].y) {
                bombArr.splice(i, 1);
                break;
            }
        }
    }
}