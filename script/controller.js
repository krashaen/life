var controller = {
    clickElement: null,
    onClickCreate:  function () {
        var size = document.getElementById('size');
        size = parseInt(size.value);
        view.gameMenuCreate();
        model.createMatrix(size); 
        view.showGameTable(model.matrix);
        var x = document.getElementsByClassName('game-form');
        x[0].className = 'form-hiden';
    },


    rebuild: function (e) {
        var key=e.keyCode || e.which;
        if (key === 13) {
            e.preventDefault();
            this.onClickCreate();
        }
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

    getStartGameButtonTitle: function() {
        var buttonTitle = null;
        buttonTitle = document.getElementsByClassName('start-button');
        if (buttonTitle[0].textContent === 'Старт') {
            buttonTitle[0].textContent = 'Пауза';
            return true;
        } 
        if (buttonTitle[0].textContent === 'Пауза') {
            buttonTitle[0].textContent = 'Старт';
            return false;
        }
    },

    startGame: function() {
        var stringId = null;
        var celLifef = 0;
        while (true) {
            var title = controller.getStartGameButtonTitle();
        if (title === false) break;
        for (var i = 0; i < model.matrix.length ; i++) { 
            model.newMatrix[i] = [];
            for (var j = 0; j < model.matrix.length; j++) {
                model.newMatrix[i][j] = {
                    celStatus: model.matrix[i][j].celStatus,
                    id: model.matrix[i][j].id
                    };
                stringId = i.toString() + '-' + j.toString();
                
                    model.updateMatrix(stringId);
               
            }
        }
        setTimeout ( function() {
            view.showGameTable(model.newMatrix)}, 1000);
    }
        },

        newGame: function() {
            for (var i = 0; i < model.matrix.length ; i++) { 
                for (var j = 0; j < model.matrix.length; j++) {
                    stringId = i.toString() + j.toString();
                    model.matrix[i][j].celStatus = 'dead';
                }
            }
            view.showGameTable(model.matrix);
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