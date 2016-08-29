var newDiv1 = null;
var gameTable;
var matrix = new Array();
function create(obj) {
    var size = parseInt(document.getElementById('size').value);
    var newRow = null;
    var newCell = null;
    gameTable = null;
    if (isNaN(size)) alert('Ведите число');
    else {
        gameMenuCreate ();
        gameTable = document.createElement("table");//создаём новый элемент страницы (TABLE) 
        gameTable.className = "game-table";
        document.body.appendChild(gameTable);
        for (var i = 1; i <= size; i++) {
            matrix[i] = new Array();
            newRow = gameTable.insertRow(0);//добавляем строку в созданной таблице 
            for (var j = 1; j <= size; j++) {
                newCell = newRow.insertCell(0);//в созданной строке добавляем столбец 
                matrix [i][j] = newCell;
                newCell.onclick = cellClick(i, j);
                newCell.className = "table-cell";
            }
        }
    obj.form.className = "form-hiden";
    }

}

function resetCreate() {
    var formVisible = null;
    formVisible = document.getElementsByClassName('form-hiden');
    document.body.removeChild(newDiv1);
    document.body.removeChild(gameTable);
    formVisible[0].className = 'game-form';
}

function gameMenuCreate () {
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

function cellClick(i ,j) {
    matrix[i][j].className = 'cell-life';

}

function startGame() {
    var buttonTitle = null;
    buttonTitle = document.getElementById('startBtn');
    if (buttonTitle.textContent === 'Старт') {
buttonTitle.textContent = 'Пауза';}
 else buttonTitle.textContent = 'Старт';
}
