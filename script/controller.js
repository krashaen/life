var controller = {
    onClickCreate:  function () {
        var size = document.getElementById('size');
        size = parseInt(size.value);
        view.gameMenuCreate();
        model.createMatrix(size); 
        view.showGameTable();
        var x = document.getElementsByClassName('game-form');
        x[0].className = 'form-hiden';
    },

    startGame: function() {
        var buttonTitle = null;
        buttonTitle = document.getElementsByClassName('start-button');
        if (buttonTitle[0].textContent === 'Старт') {
            buttonTitle[0].textContent = 'Пауза';}
            else buttonTitle[0].textContent = 'Старт';    
        }

}