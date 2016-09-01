var view = {

    showGameTable: function() {
        var gameTable =null;
        var newRow = null;
        var newCell = null;
        var viewCell = null;
        gameTable = document.createElement("table");//создаём новый элемент страницы (TABLE) 
        gameTable.className = "game-table";
        document.body.appendChild(gameTable);
        for (var i = 0; i < model.matrix.length ; i++) {
            newRow = gameTable.insertRow(0);//добавляем строку в созданной таблице 
            for (var j = 0; j < model.matrix.length; j++) {
                viewCell = newRow.insertCell(0);//в созданной строке добавляем столбец 
                newCell = model.matrix[i][j];
                if (newCell.celStatus === 'life') viewCell.className = 'cell-life';
                if (newCell.celStatus === 'dead') viewCell.className = 'cell-dead';
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
    }, 

    createButton: function(classButton, buttonTitle) {
        var startButton = null;
        var buttonValue = null;
        startButton = document.createElement("BUTTON");
        startButton.className = classButton;
        buttonValue = document.createTextNode(buttonTitle);
        startButton.appendChild(buttonValue);
        document.body.appendChild(startButton);
    }
};
