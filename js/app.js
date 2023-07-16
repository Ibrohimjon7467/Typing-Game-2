const modal = document.getElementById("restart-modal");
const nameModal = document.getElementById("name-modal");
const overlay = document.getElementById("overlay");
const randomWorldEl = document.getElementById("random-word");
const inputEl = document.getElementById("user-word");
const scoreEl = document.querySelector("#score");
const timeEl = document.querySelector("#time");
const inputContainer = document.querySelector(".input-container");
const restartBtn = document.querySelector(".restart-btn");
const modalBody = document.querySelector(".end-modal");
const UmumiyBall = document.querySelector("#umumiy-bal");
const usernameInput = document.querySelector("#username-input");
const startGame = document.querySelector("#start-game");
const nameSpan = document.getElementById("name-span");

inputEl.focus();

let randomWorld;
let userScore = 0;
let userTime = 10;

// Modal
const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const changeWord = () => {
  const randomNumber = Math.trunc(Math.random() * words.length);
  randomWorld = words[randomNumber];
  randomWorldEl.textContent = randomWorld;
};

changeWord();

inputEl.addEventListener("input", () => {
  const userWord = inputEl.value;

  if (userWord == randomWorld) {
    changeWord();
    userScore++;
    userTime += 3;
    scoreEl.textContent = userScore;
    inputEl.value = "";
  }
});
restartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userTime = 10;
  userScore = 0;
  changeWord();
  scoreEl.textContent = 0;
  inputContainer.style.display = "block";
  nameModal.classList.add("hidden");
  overlay.classList.remove("hidden");
  addHidden();
  inputEl.value = "";
});

startGame.addEventListener("click", function (e) {
  e.preventDefault();
  nameSpan.textContent = usernameInput.value;
  if (usernameInput.value == "") {
    alert("Ismingizni kiritmadingiz");
  } else {
    usernameInput.value = "";
    nameModal.classList.add("hidden");
    overlay.classList.add("hidden");
    inputContainer.classList.remove("hidden");
    const timeInterval = setInterval(() => {
      if (userTime > 0) {
        userTime--;
        timeEl.textContent = `${userTime}s`;
      } else if (userTime == 0) {
        removeHidden();
        inputContainer.classList.add("hidden");
        UmumiyBall.textContent = userScore;
        inputEl.value = "";
      } else {
        clearInterval(timeInterval);
      }
    }, 1000);
  }
});