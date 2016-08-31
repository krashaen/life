var matrix = [];
function createGameTable(size) {
    var newCell = 0;
    for (var i = 1; i <= size; i++) {
        matrix[i] = [];
        for (var j = 1; j <= size; j++) {
            matrix [i][j] = i + newCell + j;

            }
    }
} 