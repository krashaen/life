function create (obj) {
    var size = parseInt(document.getElementById('size').value);
    var gameTable = null;
    var newRow = null;
    var newCell = null;
    gameTable = document.createElement("table");//создаём новый элемент страницы (TABLE) 
    gameTable.className = "game-table";
    document.body.appendChild(gameTable);
    if (isNaN(size)) alert('Ведите число');
    else {
     for (var i = 1; i <= size; i++) {
        newRow = gameTable.insertRow(0);//добавляем строку в созданной таблице 
        for (var j = 1; j <= size; j++) {
            newCell = newRow.insertCell(0);//в созданной строке добавляем столбец 
            newCell.className = "table-cell";
        }
     }
    }
}