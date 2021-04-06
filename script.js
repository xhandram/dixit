let numCards = 90;
document.querySelector(
  "#numCards"
).innerHTML = `<b>Total Cards: </b> ${numCards}`;

function displayCards() {
  const container = document.querySelector("#cardsWrapper");
  let cards = "";

  for (i = 1; i <= numCards; i++) {
    cards += `<div class="card" id="card-${i}"><img src="images/carta (${i}).jpg"/></div>`;
  }
  container.innerHTML = cards;
}
