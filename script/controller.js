var controller = {
    onClickCreate:  function () {
        var size = document.getElementById('size');
        size = parseInt(size.value);
        model.createMatrix(size); 
        view.showGameTable();
    }

}