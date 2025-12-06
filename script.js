//your JS code here. If required.
const submitBtn = document.getElementById('submit');
const board = document.getElementById('board');
const message = document.querySelector('.message');
const cells = document.querySelectorAll('.cell');

let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "x";
let gameActive = true;

const wins = [
  [1,2,3], [4,5,6], [7,8,9],
  [1,4,7], [2,5,8], [3,6,9],
  [1,5,9], [3,5,7]
];

submitBtn.addEventListener('click', () => {

  player1 = document.getElementById('player-1').value || "Player 1";
  player2 = document.getElementById('player-2').value || "Player 2";
  currentPlayer = player1;

  message.textContent = `${currentPlayer}, you're up!`;

  document.getElementById('input-area').style.display = 'none';
  board.style.display = 'block';
});

cells.forEach(cell => {
  cell.addEventListener('click', () => {

    if (!gameActive || cell.textContent !== "") return;

    cell.textContent = currentSymbol;
    checkWinner();

    if (!gameActive) return;

    currentSymbol = currentSymbol === "x" ? "o" : "x";
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    message.textContent = `${currentPlayer}, you're up!`;
  });
});

function checkWinner() {
  for (let combo of wins) {
    let [a, b, c] = combo;

    if (
      document.getElementById(a).textContent !== "" &&
      document.getElementById(a).textContent === document.getElementById(b).textContent &&
      document.getElementById(b).textContent === document.getElementById(c).textContent
    ) {
      message.textContent = `${currentPlayer}, congratulations you won!`;
      gameActive = false;
      return;
    }
  }
}
