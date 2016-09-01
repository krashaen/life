var controller = {
    onClickCreate:  function () {
        var size = document.getElementById('size');
        size = parseInt(size.value);
        model.createMatrix(size); 
        view.showGameTable();
        var x = document.getElementsByClassName('game-form');
        x[0].className = 'form-hiden';
        view.gameMenuCreate();
    }

}