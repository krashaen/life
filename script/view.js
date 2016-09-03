var view = {
    gameTable: null,
    showGameTable: function() {
        var newRow = null;
        var newCell = null;
        var viewCell = null;
        var stringId = null;
         if (this.gameTable != null) document.body.removeChild(document.body.children[5]);
        this.gameTable = document.createElement("table");//создаём новый элемент страницы (TABLE) 
        this.gameTable.className = "game-table";
        document.body.appendChild(this.gameTable);
        for (var i = 0; i < model.matrix.length ; i++) {
            newRow = this.gameTable.insertRow(0);//добавляем строку в созданной таблице 
            for (var j = 0; j < model.matrix.length; j++) {
                viewCell = newRow.insertCell(0);//в созданной строке добавляем столбец 
                newCell = model.matrix[i][j];
                stringId = i.toString() + '-' + j.toString();
                viewCell.setAttribute('data-id', stringId);
                if (newCell.celStatus === 'life') viewCell.className = 'cell-life';
                if (newCell.celStatus === 'dead') viewCell.className = 'cell-dead';
                viewCell.onclick = controller.onCellClick;
            }
         }
    },

    gameMenuCreate: function() {
        var newDiv = null;
        var newGameBut = null;
        var startGameBut = null;
        var resetGameBut = null;
        newDiv = document.createElement('div');
        newDiv.className = 'game-menu';
        newGameBut = this.createButton('form-button', 'Начать заново');
        startGameBut = this.createButton('start-button', 'Старт');
        resetGameBut = this.createButton('form-button', 'Новое поле');
        document.body.appendChild(newDiv);
        newDiv.appendChild(newGameBut);
        newDiv.appendChild(startGameBut);
        newDiv.appendChild(resetGameBut);
        startGameBut.onclick = controller.startGame;
        resetGameBut.onclick = controller.resetCreate;
        newGameBut.onclick = controller.newGame;
    }, 

    createButton: function(classButton, buttonTitle) {
        var startButton = null;
        var buttonValue = null;
        startButton = document.createElement("BUTTON");
        startButton.className = classButton;
        buttonValue = document.createTextNode(buttonTitle);
        startButton.appendChild(buttonValue);
        document.body.appendChild(startButton);
        return startButton;
    }
};
