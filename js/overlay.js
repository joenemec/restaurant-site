"use strict";

// ========== MOBILE NAV ==========
const burgerIcon = document.querySelector(".burger__menu");
const navMenu = document.querySelector(".header__content");
const navLinks = document.querySelector(".nav__links");
const logo = document.querySelector(".logo");
// ========== CART ==========
const cartIcon = document.querySelector(".cart");
const hideCart = document.querySelectorAll(".hide__cart");
const closeIcon = document.querySelector(".cart__close");
const overlay = document.querySelector(".overlay");

const overlayActive = () => {
  overlay.classList.toggle("active");
};

const onOpen = function () {
  closeIcon.classList.toggle("active");
  hideCart.forEach((hide) => hide.classList.toggle("inactive"));
  overlayActive();
};

const closeNav = function () {
  navMenu.classList.remove("active");
  logo.classList.remove("active");
  overlay.classList.remove("active");
  closeIcon.classList.remove("active");
  hideCart.forEach((hide) => hide.classList.remove("inactive"));
};

const closeCart = function () {
  modalCart.classList.remove("active");
  overlay.classList.remove("active");
  closeIcon.classList.remove("active");
  hideCart.forEach((hide) => hide.classList.remove("inactive"));
  burgerIcon.addEventListener("click", revealNav);
};

const linkClick = function (e) {
  const clicked = e.target.closest(".nav__link");
  if (!clicked) return;
  closeNav();
};

const revealNav = function () {
  navMenu.classList.toggle("active");
  logo.classList.toggle("active");
  onOpen();

  closeIcon.addEventListener("click", closeNav);
  navLinks.addEventListener("click", linkClick);
};

const revealCart = function () {
  modalCart.classList.toggle("active");
  onOpen();

  closeIcon.addEventListener("click", closeCart);
  burgerIcon.removeEventListener("click", revealNav);
};

burgerIcon.addEventListener("click", revealNav);
cartIcon.addEventListener("click", revealCart);
