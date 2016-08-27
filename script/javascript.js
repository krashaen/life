function create (obj) {
    var size = parseInt(document.getElementById('size').value);
    var gameTable=document.createElement("table");//создаём новый элемент страницы (TABLE) 
    var newRow = null;
    var newCell = null;
    document.body.appendChild(gameTable);
    if (isNaN(size)) alert('Ведите число');
    else {

     for (var i = 0; i < size; i++) {
        newRow = gameTable.insertRow(0);//добавляем строку в созданной таблице 
        for (var j = 0; j < size; j++) {
            newCell = newRow.insertCell(0);//в созданной строке добавляем столбец 
        }
        newCell.width="200";//указываем длину столбца равной 200 пикселей 
        newCell.align="center";//указываем позиционирование по центру 
        newCell.innerHTML=i;//заполняем ячейку жирным текстом 
     }
    }
    }