function onClickCreate(obj) {
    var size = document.getElementById('size');
    size = parseInt(size.value); 
    createGameTable(size);
}