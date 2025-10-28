//Start game button
(function startGame() {
  const form = document.querySelector("form");
  const tableContainer = document.querySelector(".tableContainer");
  const homePage = document.querySelector(".homePage");
  const firstPlayer = document.querySelector("#firstPlayer");
  const secondPlayer = document.querySelector("#secondPlayer");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    playersInput();
    firstPlayer.textContent = `${playerOne.name} (X)`;
    secondPlayer.textContent = `${playerTwo.name} (O)`;
    tableContainer.classList.toggle("hidden");
    homePage.classList.toggle("hidden");
    updateScoreboard();
  });
})();

function playersInput() {
  const playerOneDom = document.querySelector("#playerOne");
  const playerTwoDom = document.querySelector("#playerTwo");
  playerOne = createPlayer(`${playerOneDom.value}`, true, "X", 0);
  playerTwo = createPlayer(`${playerTwoDom.value}`, false, "O", 0);
}

//Game board possiblities for correct marking
function check(gameBoard) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //checking every possibilities
  for (const [a, b, c] of lines) {
    if (
      gameBoard[a] !== 0 &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[b] === gameBoard[c]
    ) {
      return true;
    }
  }
  return false;
}

//The actual game board
const gameBoard = (function () {
  const gameBoard = Array(9).fill(0);
  let movesLeft = 9;

  function getMovesLeft() {
    return movesLeft;
  }
  function resetMovesLeft() {
    movesLeft = 9;
  }

  function insertData(index, value) {
    gameBoard[index] = value;
    movesLeft--;
  }

  function data() {
    return gameBoard;
  }

  return { insertData, data, getMovesLeft, resetMovesLeft };
})();

//Empty position check
function checkPosition(cellPositionId) {
  const cellIndex = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
  };
  let isEmpty = true;
  const position = cellIndex[cellPositionId];
  //check empty
  if (gameBoard.data()[position] === 0) isEmpty = true;
  else isEmpty = false;

  //getting position in index number
  return { isEmpty, position };
}

//data inserting from dom to array
function domDataInsertion(position) {
  //move forward for manupulating game board only if
  //the position is empty

  const activePlayerMarker = switchPlayer();
  gameBoard.insertData(position, activePlayerMarker);

  return { activePlayerMarker };
}

//players
function createPlayer(name, isActive, marker, wins) {
  return { name, isActive, marker, wins };
}
let playerOne = undefined;
let playerTwo = undefined;

//switch player
function switchPlayer() {
  const activePlayer = playerOne.isActive ? playerOne : playerTwo;
  const inactivePlayer = playerOne.isActive ? playerTwo : playerOne;

  // switch state
  activePlayer.isActive = false;
  inactivePlayer.isActive = true;
  activeClassToggle();
  return activePlayer.marker;
}

//Dom active state change
function activeClassToggle() {
  const player = document.querySelectorAll(".player");
  player[0].classList.toggle("active");
  player[1].classList.toggle("active");
}

//Show Markings
function renderMarkings(el, position) {
  const { activePlayerMarker } = domDataInsertion(position);
  document.querySelector(`#${el.id}`).textContent = activePlayerMarker;

  if (
    check(gameBoard.data()) ||
    (gameBoard.getMovesLeft() === 0 && !check(gameBoard.data()))
  )
    declareResult(check(gameBoard.data()), activePlayerMarker);
}

//announce result
function declareResult(result) {
  const activePlayer = !playerOne.isActive ? playerOne : playerTwo;
  if (result) {
    const cells = document.querySelector(".table");
    cells.style.pointerEvents = "none";
    setTimeout(() => {
      message(activePlayer, result);
    }, 400); // 0.4 second delay
  } else {
    setTimeout(() => {
      message(activePlayer, result);
    }, 400); // 0.4 second delay
  }
}
//render message

function message(activePlayer, state) {
  const winningMessage = document.querySelector(".winningMessage");
  if (state) {
    activePlayer.wins++;
    console.log("Player 1 :" + playerOne.wins);
    console.log("Player 2 :" + playerTwo.wins);
    winningMessage.textContent = `${activePlayer.name} Won 🎉🎊`;
    updateScoreboard();
  } else {
    winningMessage.textContent = "Tie";
  }
}
function updateScoreboard() {
  const score1 = document.querySelector("#scorePlayer1");
  const score2 = document.querySelector("#scorePlayer2");
  score1.textContent = `${playerOne.name}: ${playerOne.wins}`;
  score2.textContent = `${playerTwo.name}: ${playerTwo.wins}`;
}

//Listining click event on cells
(function () {
  const cells = document.querySelector(".table");

  cells.addEventListener("click", function (el) {
    if (el.target.classList.contains("cell")) {
      const { isEmpty, position } = checkPosition(el.target.id);
      if (isEmpty) renderMarkings(el.target, position);
    }
  });
})();

//play again game
function playAgain() {
  playerOne.isActive = true;
  playerTwo.isActive = false;
  document.querySelector(".winningMessage").textContent = "";
  gameBoard.data().fill(0);

  document.querySelectorAll(".table .cell").forEach((e) => {
    e.textContent = "";
  });
  document.querySelector(".table").style.pointerEvents = "auto";

  const player = document.querySelectorAll(".player");
  player[0].classList.add("active");
  player[1].classList.remove("active");
  gameBoard.resetMovesLeft();
  console.log("hi");
}

//play again button
(function () {
  const playAgainButton = document.querySelector(".playAgain button");
  playAgainButton.addEventListener("click", playAgain);
})();

//rest game
function reset() {
  playerOne.isActive = true;
  playerTwo.isActive = false;
  document.querySelector(".winningMessage").textContent = "";
  gameBoard.data().fill(0);
  document.querySelectorAll(".table .cell").forEach((e) => {
    e.textContent = "";
  });
  document.querySelector(".table").style.pointerEvents = "auto";
  const player = document.querySelectorAll(".player");
  player[0].classList.add("active");
  player[1].classList.remove("active");
  gameBoard.resetMovesLeft();
  playerOne.wins = 0;
  playerTwo.wins = 0;
  const homePage = document.querySelector(".homePage");
  const tableContainer = document.querySelector(".tableContainer");
  tableContainer.classList.toggle("hidden");
  homePage.classList.toggle("hidden");
}

//rest button
(function () {
  const resetButton = document.querySelector(".reset button");
  resetButton.addEventListener("click", reset);
})();
