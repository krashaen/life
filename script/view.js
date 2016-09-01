var view = {

    showGameTable: function() {
        var gameTable;
        var newRow = null;
        var newCell = null;
        gameTable = document.createElement("table");//создаём новый элемент страницы (TABLE) 
        gameTable.className = "game-table";
        document.body.appendChild(gameTable);
        for (var i = 1; i <= model.matrix.lenght ; i++) {
            newRow = gameTable.insertRow(0);//добавляем строку в созданной таблице 
            for (var j = 1; j <= model.matrix.lenght; j++) {
                newCell = newRow.insertCell(0);//в созданной строке добавляем столбец 
                newCell = model.matrix [i][j];
                newCell.className = "table-cell";
            }
        }
    }
};
function showGameTable(size) {
    gameMenuCreate ();
    gameTable = document.createElement("table");//создаём новый элемент страницы (TABLE) 
    gameTable.className = "game-table";
    document.body.appendChild(gameTable);
}

function gameMenuCreate (obj) {
    var newDiv = null;
    var newGameBut = null;
    var startGameBut = null;
    var resetGameBut = null;
    newDiv = document.createElement('div');
    newDiv.className = 'game-menu';
    newGameBut = createButton('form-button', 'Начать заново');
    startGameBut = createButton('start-button', 'Старт');
    resetGameBut = createButton('form-button', 'Новое поле');
    document.body.appendChild(newDiv);
    newDiv.appendChild(newGameBut);
    newDiv.appendChild(startGameBut);
    newDiv.appendChild(resetGameBut);
    newGameBut.onclick = clearGame;
    resetGameBut.onclick = resetCreate;
    startGameBut.onclick = startGame;
    startGameBut.id = 'startBtn';
    newDiv1 = newDiv; 
}

function createButton(clasButton, buttonTitle) {
    var startButton = null;
    var buttonValue = null;
    startButton = document.createElement("BUTTON");
    startButton.className = clasButton;
    buttonValue = document.createTextNode(buttonTitle);
    startButton.appendChild(buttonValue);
    document.body.appendChild(startButton);
    return startButton;
}