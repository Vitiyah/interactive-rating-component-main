const mainCard = document.querySelector(".card");
const thanksCard = document.querySelector(".card-thanks");
const submitBtn = document.getElementById("submit");
const rates = document.querySelectorAll(".btn");
const scoreText = document.getElementById("score-text");
const rateAgainBtn = document.getElementById("rate-again");

function AllFunction() {
  submitHide();
  rating();
  rateAgain();
}

function submitHide() {
  submitBtn.addEventListener("click", () => {
    mainCard.classList.add("hidden");
    thanksCard.style.display = "flex";
  });
}

function rating() {
  rates.forEach((rate) => {
    rate.addEventListener("click", () => {
      scoreText.innerHTML = `You selected ${rate.innerHTML} out of 5`;
    });
  });
}

function rateAgain() {
  rateAgainBtn.addEventListener("click", () => {
    mainCard.classList.remove("hidden");
    thanksCard.style.display = "none";
  });
}

AllFunction();
