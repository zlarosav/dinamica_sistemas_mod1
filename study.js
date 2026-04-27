const body = document.body;
const toggle = document.querySelector("#toggleAnswers");
const search = document.querySelector("#search");
const visibleCount = document.querySelector("#visibleCount");
const cards = [...document.querySelectorAll("[data-question-card]")];

function setCardRevealed(card, revealed) {
  card.classList.toggle("is-revealed", revealed);
  const button = card.querySelector("[data-reveal]");
  if (button) {
    button.textContent = revealed ? "Ocultar respuesta" : "Mostrar respuesta";
    button.setAttribute("aria-expanded", String(revealed));
  }
}

function updateGlobalButton() {
  if (!toggle) return;
  const visibleCards = cards.filter((card) => !card.hidden);
  const allVisibleRevealed = visibleCards.length > 0 && visibleCards.every((card) => card.classList.contains("is-revealed"));
  toggle.textContent = allVisibleRevealed ? "Ocultar todas las respuestas" : "Mostrar todas las respuestas";
  body.classList.toggle("answers-hidden", !allVisibleRevealed);
}

cards.forEach((card) => {
  const button = card.querySelector("[data-reveal]");
  if (!button) return;
  button.addEventListener("click", () => {
    setCardRevealed(card, !card.classList.contains("is-revealed"));
    updateGlobalButton();
  });
});

if (toggle) {
  toggle.addEventListener("click", () => {
    const visibleCards = cards.filter((card) => !card.hidden);
    const revealAll = !visibleCards.every((card) => card.classList.contains("is-revealed"));
    visibleCards.forEach((card) => setCardRevealed(card, revealAll));
    updateGlobalButton();
  });
}

if (search) {
  search.addEventListener("input", () => {
    const term = search.value.trim().toLocaleLowerCase("es");
    let visible = 0;
    cards.forEach((card) => {
      const match = card.textContent.toLocaleLowerCase("es").includes(term);
      card.hidden = !match;
      if (match) visible += 1;
    });
    visibleCount.textContent = String(visible);
    updateGlobalButton();
  });
}

updateGlobalButton();
