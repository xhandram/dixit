let numCards = 90;
const container = document.querySelector("#cardsWrapper");
const selectionBtn = document.querySelector("#selectionBtn");
const resetBtn = document.querySelector("#resetBtn");
const numCardsTxt = document.querySelector("#numCards");
const title = document.querySelector("h1");

function displayIsolation() {
  let cards = "";
  for (i = 1; i <= 9; i++) {
    cards += `<div class="card"><img data-indexnum="${i}" src="https://isolant.games/d/cards/0${i}.jpg"/></div>`;
  }
  for (i = 10; i <= 500; i++) {
    cards += `<div class="card"><img data-indexnum="${i}" src="https://isolant.games/d/cards/${i}.jpg"/></div>`;
  }
  container.innerHTML = cards;
  cards = document.querySelectorAll("img");
  cards.forEach((card) => card.addEventListener("click", selectionToggle));
  selectionBtn.disabled = false;
}

function displayD4() {
  let cards = "";
  for (i = 1; i <= 9; i++) {
    cards += `<div class="card"><img data-indexnum="${i}" src="https://isolant.games/d/cards/d4/d4-0${i}.jpg"/></div>`;
  }
  for (i = 10; i <= 100; i++) {
    cards += `<div class="card"><img data-indexnum="${i}" src="https://isolant.games/d/cards/d4/d4-${i}.jpg"/></div>`;
  }
  container.innerHTML = cards;
  cards = document.querySelectorAll("img");
  cards.forEach((card) => card.addEventListener("click", selectionToggle));
  selectionBtn.disabled = false;
}

numCardsTxt.innerHTML = `<b>Total Cards: </b> ${numCards}`;
displayCards();
selectionBtn.addEventListener("click", renderSelection);
resetBtn.addEventListener("click", displayCards);

function renderSelection() {
  let selectedCards = document.querySelectorAll("div .card-selected");
  container.innerHTML = "";
  let cards = "";

  selectedCards.forEach((selectedCard) => {
    selectedCard.classList.remove("card-selected");
    let num = selectedCard.dataset.indexnum;

    cards += `<div class="card"> <a href="images/carta (${num}).jpg" data-lightbox="image-${num}">${selectedCard.outerHTML} </a></div>`;
    i++;
  });
  container.innerHTML = cards;
  title.innerText = "Cartas Elegidas";
  selectionBtn.disabled = true;
}

function selectionToggle() {
  this.classList.toggle("card-selected");
}

function displayCards() {
  let cards = "";
  for (i = 1; i <= numCards; i++) {
    cards += `<div class="card"><img data-indexnum="${i}" src="images/carta (${i}).jpg"/></div>`;
  }
  container.innerHTML = cards;
  cards = document.querySelectorAll("img");
  cards.forEach((card) => card.addEventListener("click", selectionToggle));
  selectionBtn.disabled = false;
}
