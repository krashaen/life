var controller = {
    clickElement: null,
    onClickCreate:  function () {
        var size = document.getElementById('size');
        size = parseInt(size.value);
        view.gameMenuCreate();
        model.createMatrix(size); 
        view.showGameTable();
        var x = document.getElementsByClassName('game-form');
        x[0].className = 'form-hiden';
    },

    onCellClick: function() {
        var i = null;
        var j = null;
        clickElement = this.getAttribute('data-id');
        i = parseInt(clickElement[0]);
        j = parseInt(clickElement[1]);
        this.className = 'cell-life';
        model.matrix[i][j].celStatus = 'life';
    }, 

    startGame: function() {
        var buttonTitle = null;
        buttonTitle = document.getElementsByClassName('start-button');
        if (buttonTitle[0].textContent === 'Старт') {
            buttonTitle[0].textContent = 'Пауза';}
            else buttonTitle[0].textContent = 'Старт';   
        view.showGameTable();
        },

        resetCreate: function() {
            var formVisible = null;
            formVisible = document.getElementsByClassName('form-hiden');
            formVisible[0].className = 'game-form';
            document.body.removeChild(document.body.children[5]);
            document.body.removeChild(document.body.children[4]);
            view.gameTable = null;  
        }
}