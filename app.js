let likeCount = 0;
let coinCount = 100;
let copyCount = 0;

const likeDisplay = document.getElementById("likeCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");


document.querySelectorAll(".heart").forEach(btn => {
  btn.addEventListener("click", () => {
    likeCount++;
    likeDisplay.textContent = likeCount;
  });
});


document.querySelectorAll(".copy").forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.closest(".card").querySelector(".number").textContent;
    navigator.clipboard.writeText(number);
    alert(`Copied ${number}`);
    copyCount++;
    copyDisplay.textContent = copyCount;
  });
});


document.querySelectorAll(".call").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const name = card.querySelector("h6").textContent;
    const number = card.querySelector(".number").textContent;

    if (coinCount < 20) {
      alert("Not enough coins to make this call.");
      return;
    }

    coinCount -= 20;
    coinDisplay.textContent = coinCount;
    alert(`Calling ${name} at ${number}`);

    const time = new Date().toLocaleTimeString();
    const li = document.createElement("li");
    li.textContent = `${name} (${number}) - ${time}`;
    historyList.prepend(li);
  });
});


clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});


function Heart(el) {
    if (el.textContent === '♡') {
      el.textContent = '❤️';
      el.classList.add('active');
    } else {
      el.textContent = '♡';
      el.classList.remove('active');
    }
  }
