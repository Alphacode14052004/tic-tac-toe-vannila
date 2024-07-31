console.log("I LOVE NoNe")

const board = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;

const ticTacToe = document.getElementById('ticTacToe');
const statusDiv = document.getElementById('status');

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function createBoard() {
    board.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => handleCellClick(index));
        ticTacToe.appendChild(cell);
    });
}

function handleCellClick(index) {
    if (board[index] || !gameActive) return;

    board[index] = currentPlayer;
    ticTacToe.children[index].textContent = currentPlayer;
    ticTacToe.children[index].classList.add('disabled');

    if (checkWinner()) {
        statusDiv.textContent = `${currentPlayer} wins!`;
        gameActive = false;
    } else if (board.every(cell => cell)) {
        statusDiv.textContent = `It's a draw!`;
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDiv.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWinner() {
    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

createBoard();
statusDiv.textContent = `Player ${currentPlayer}'s turn`;
