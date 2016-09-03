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
        i = parseInt(clickElement.split('-')[0]);
        j = parseInt(clickElement.split('-')[1]);
        if (model.matrix[i][j].celStatus === 'life') {
             this.className = 'cell-dead';
            model.matrix[i][j].celStatus = 'dead';
         } else {
            this.className = 'cell-life';
             model.matrix[i][j].celStatus = 'life';
         }
    }, 

    startGame: function() {
        var buttonTitle = null;
        var stringId = null;
        var celLifef = 0;
        buttonTitle = document.getElementsByClassName('start-button');
        if (buttonTitle[0].textContent === 'Старт') {
            buttonTitle[0].textContent = 'Пауза';}
            else buttonTitle[0].textContent = 'Старт';
        for (var i = 0; i < model.matrix.length ; i++) { 
            for (var j = 0; j < model.matrix.length; j++) {
                stringId = i.toString() + '-' + j.toString();
                model.updateMatrix(stringId);
            }
        }
        view.showGameTable();

        },

        newGame: function() {
            for (var i = 0; i < model.matrix.length ; i++) { 
                for (var j = 0; j < model.matrix.length; j++) {
                    stringId = i.toString() + j.toString();
                    model.matrix[i][j].celStatus = 'dead';
                }
            }
            view.showGameTable();
        },

        resetCreate: function() {
            var formVisible = null;
            formVisible = document.getElementsByClassName('form-hiden');
            formVisible[0].className = 'game-form';
            document.body.removeChild(document.body.children[5]);
            document.body.removeChild(document.body.children[4]);
            view.gameTable = null;
            model.matrix = [];  
        }
}