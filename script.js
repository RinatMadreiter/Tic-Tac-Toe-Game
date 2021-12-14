let fields = [];
let gameOver = false;
let currentShape = 'cross';

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        }

        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}

function draw() {
    for (let index = 0; index < fields.length; index++) {
        if (fields[index] == 'circle') {
            document.getElementById(`circle-${index}`).classList.remove('d-none');
        }

        if (fields[index] == 'cross') {
            document.getElementById(`cross-${index}`).classList.remove('d-none');
        }
    }
}


function checkForWin() {
    let winner;

    // first row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
        console.log('line1 drawn');
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[4]) {
        winner = fields[4];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[7]) {
        winner = fields[7];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[4]) {
        winner = fields[4];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[5]) {
        winner = fields[5];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[4]) {
        winner = fields[4];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1.3)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[4]) {
        winner = fields[4];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1.3)';
    }

    if (winner) {
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restartBtn').classList.remove('d-none');
        }, 1000);
    }
}


function restartGame() {
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restartBtn').classList.add('d-none');
    removeAllHorizontalLines();
    removeAllVerticalLines();
    removeAllDiagonalLines();
    removeAllCirclesAndCrosses();
}

function removeAllHorizontalLines() {
    for (let index = 1; index <= 3; index++) {
        document.getElementById(`line-${index}`).style.transform = 'scaleX(0)';
    }
}

function removeAllVerticalLines() {
    for (let index = 4; index <= 6; index++) {
        document.getElementById(`line-${index}`).style.transform = 'rotate(90deg) scaleX(0)';
    }
}

function removeAllDiagonalLines() {
    document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(0)';
    document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(0)';
}

function removeAllCirclesAndCrosses() {
    for (let index = 0; index <= 8; index++) {
        document.getElementById(`circle-${index}`).classList.add('d-none');
        document.getElementById(`cross-${index}`).classList.add('d-none');
    }
}

/**
 * todo: create draw condition endscreen and restart option
 * todo: create media queries from 515px
 */

