let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cellIndex) {
    if (board[cellIndex] === '' && gameActive) {
        board[cellIndex] = currentPlayer;
        document.querySelector('.cell:nth-child(' + (cellIndex + 1) + ')').textContent = currentPlayer;
        if (checkWin()) {
            document.getElementById('status').textContent = 'Player ' + currentPlayer + ' wins!';
            gameActive = false;
        } else if (board.every((cell) => cell !== '')) {
            document.getElementById('status').textContent = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = 'Player ' + currentPlayer + '\'s turn';
        }
    }
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombos.some((combo) => {
        const [a, b, c] = combo;
        return board[a] && board[a] === board[b] && board[b] === board[c];
    });
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.querySelectorAll('.cell').forEach((cell) => cell.textContent = '');
    document.getElementById('status').textContent = 'Player X\'s turn';
}

document.getElementById('status').textContent = 'Player X\'s turn';
