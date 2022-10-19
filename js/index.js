"use strict";

// ========== SCROLL TO TOP ON REFRESH ==========
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.onbeforeunload();

// ========== REVEAL SECTIONS ==========
const allSections = document.querySelectorAll(".section");
const footer = document.querySelector(".footer");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// ========== CAROUSEL ==========
const reviewCards = document.querySelector(".reviews__cards");
const cardSlot = document.querySelectorAll(".card__slot");
const dots = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow__slide-left");
const arrowRight = document.querySelector(".arrow__slide-right");

let curCard = 0;
const maxCard = cardSlot.length;

const createDots = function () {
  cardSlot.forEach(function (_, i) {
    dots.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

createDots();

const activateDot = function (card) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${card}"]`)
    .classList.add("dots__dot--active");
};

const goToCard = function (card) {
  cardSlot.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - card)}%)`)
  );
};

// Next slide
const nextCard = function () {
  if (curCard === maxCard - 1) {
    curCard = 0;
  } else {
    curCard++;
  }

  goToCard(curCard);
  activateDot(curCard);
};

const prevCard = function () {
  if (curCard === 0) {
    curCard = maxCard - 1;
  } else {
    curCard--;
  }
  goToCard(curCard);
  activateDot(curCard);
};

const init = function () {
  goToCard(0);
  activateDot(0);
};
init();

// Event handlers
arrowRight.addEventListener("click", nextCard);
arrowLeft.addEventListener("click", prevCard);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevCard();
  e.key === "ArrowRight" && nextCard();
});
