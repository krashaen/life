var model = {
    matrix: [],
    createMatrix: function(size) {
        for (var i = 0; i < size; i++) {
            this.matrix[i] = [];
            for (var j = 0; j < size; j++) {
                this.matrix[i][j] = { 
                    id: i.toString() + j.toString(),
                    celStatus: 'dead'
                };
            }
        }
    },

    updateMatrix: function(id) {
        var counterLifeCell = 0;
        var i = parseInt(id[0]);
        var j = parseInt(id[1]);
        var roundCells = [];
        var selectedCell = this.matrix[i][j];
        if (this.matrix[i-1][j-1]) roundCells.push(this.matrix[i-1][j-1])
        else undefined ;
        if (this.matrix[i-1][j]) roundCells.push(this.matrix[i-1][j])
        else undefined ;
        if (this.matrix[i-1][j+1]) roundCells.push(this.mmatrix[i-1][j+1])
        else undefined ;
        if (this.matrix[i][j-1]) roundCells.push(this.matrix[i][j-1])
        else undefined ;
        if (this.matrix[i][j+1]) roundCells.push(this.matrix[i][j+1])
        else undefined ;
        if (this.matrix[i+1][j-1]) roundCells.push(this.matrix[i+1][j-1])
        else undefined ;
        if (this.matrix[i+1][j]) roundCells.push(this.matrix[i+1][j])
        else undefined ;
        if (this.matrix[i+1][j+1]) roundCells.push(this.matrix[i+1][j+1])
        else undefined ;
        for (var k = 0; k < roundCells.length; k++) {
            if (roundCells[k].celStatus === 'life') counterLifeCell++; 
        }

        if (selectedCell.celStatus === 'life') {
            if (counterLifeCell < 2 || counterLifeCell >3) selectedCell.celStatus = 'dead'; 
        } else {
           if (selectedCell.celStatus === 'dead') {
               if (counterLifeCell === 3) selectedCell.celStatus = 'life';
            } 
        }

    }
}