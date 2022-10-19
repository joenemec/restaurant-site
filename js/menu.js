"use strict";

// ========== DROPDOWN ==========
const menudropdown = document.querySelector(".menu__dropdown");
const chevron = document.querySelector(".chevron");
const menuSelect = document.querySelector(".dropdown__select");
const selected = document.querySelector(".selected");
const menuOptions = document.querySelector(".menu__options");
const menuOption = document.querySelectorAll(".menu__option");
// ========== MENU ITEMS ==========
const menu = document.querySelector(".menu");
const menuGroup = document.querySelector(".menu__group");
const menuItem = document.querySelectorAll(".menu__item");
const orderBtn = document.querySelector(".order__btn");
const completeBtn = document.querySelector(".complete__btn");
// ========== CART ==========
const shoppingCart = document.querySelector(".shopping__cart");
const modalCart = document.querySelector(".modal__cart");
const cartItems = document.querySelector(".cart__items");
const cartAmount = document.querySelector(".cart__amount");
const cartTotal = document.querySelector(".cart__total-text");

// Click Order Now Button
const scrollToMenu = function () {
  menu.scrollIntoView();
};

orderBtn.addEventListener("click", scrollToMenu);

// note: Creates dropdown menu with menu section names
const generateDropdown = function () {
  menudropdown.addEventListener("click", () => {
    menuOptions.classList.toggle("menu__open");
    chevron.classList.toggle("chevron__rotate");
    menuSelect.classList.toggle("dropdown__click");
  });

  selected.innerText = allMenuItems[0].itemSection;

  menuSections.forEach((section) => {
    const menuList = document.createElement("li");
    menuList.classList.toggle("menu__option");
    menuList.innerText = `${section}`;
    menuOptions.append(menuList);
  });
};

generateDropdown();

// note: Creates each menu item within the selected menu section
const generateHTML = function ({
  itemId,
  itemName,
  itemPrice,
  itemDescription,
}) {
  menuGroup.innerHTML += `
       <div class="menu__item">
       <ion-icon class="utensil__icon" name="restaurant-outline"></ion-icon>
         <div class="menu__item-text">
            <h3 class="menu__item-name">${itemName}</h3>
            <p class="menu__item-description">
            ${itemDescription}</p>
          </div>
          <div class="menu__item-cart flex__between">
            <h3 class="menu__item-price">$${itemPrice}</h3>
            <button class="menu__item-add" onClick="addToCart(${itemId})">Add to Cart</button>
          </div>
       </div>`;
};

// note: Displays each menu item within the selected menu section
const generateMenuItems = function (choice) {
  menuGroup.innerHTML = "";
  choice.filter((item) => {
    generateHTML(item);
  });
};

// note: Selects the dropdown menu section and displays it within the dropdown box
const generateSection = function (e) {
  const clicked = e.target.closest(".menu__option");
  const clickedText = clicked.innerText;
  clicked ? (selected.innerText = clickedText) : null;
  const choice = allMenuItems.filter((menu) =>
    menu.itemSection.includes(clickedText)
  );
  generateMenuItems(choice);
};

const generateDefaultSection = function () {
  const choiceDefault = allMenuItems.filter((menu) =>
    menu.itemSection.includes("Appetizers")
  );
  choiceDefault.filter((item) => {
    generateHTML(item);
  });
};

generateDefaultSection();

menuOptions.addEventListener("click", generateSection);

const generateCartHTML = function ({ itemId, itemName, itemPrice, itemUnit }) {
  cartItems.innerHTML += `
    <div class="cart__item">
      <div class="cart__item-text">
        <h5 class="cart__item-name">${itemName}</h5>
        <h5 class="cart__item-price">$${itemPrice}</h5>
      </div>
      <div class="cart__item-icons">
        <div class="cart__item-amount">
          <ion-icon
            class="amount__icon decrease__icon"
            name="remove-circle-outline"
            onClick="changeItemUnits('decrease', ${itemId})"
          ></ion-icon>
          <h5 class="cart__item-number">${itemUnit}</h5>
          <ion-icon
            class="amount__icon increase__icon"
            name="add-circle-outline"
            onClick="changeItemUnits('increase', ${itemId})"
          ></ion-icon>
        </div>
        <ion-icon
          class="close__icon"
          name="close-circle-outline"
          onClick="removeCartItems(${itemId})"
        ></ion-icon>
      </div>
    </div>`;
};

let cart = [];

const updateCart = function () {
  generateCartItems();
  generateCartTotal();
};

function generateCartItems() {
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    generateCartHTML(item);
  });
}

function generateCartTotal() {
  let totalPrice = 0;
  let totalItems = 0;

  for (let item of cart) {
    totalPrice += item.itemPrice * item.itemUnit;
    totalItems += item.itemUnit;
  }

  cartTotal.innerText = `Total (${totalItems} items): ${totalPrice.toFixed(2)}`;
  cartAmount.innerText = totalItems;
}

const removeCartItems = function (id) {
  cart = cart.filter((item) => item.itemId !== id);

  updateCart();
};

const changeItemUnits = function (action, id) {
  cart = cart.map((item) => {
    let itemUnit = item.itemUnit;

    if (item.itemId === id) {
      if (action === "decrease" && itemUnit > 1) {
        itemUnit--;
      } else if (action === "increase") {
        itemUnit++;
      }
    }

    return {
      ...item,
      itemUnit,
    };
  });

  updateCart();
};

function addToCart(id) {
  if (cart.some((item) => item.itemId === id)) {
    changeItemUnits("increase", id);
  } else {
    const item = allMenuItems.find((item) => item.itemId === id);

    cart.push({
      ...item,
      itemUnit: 1,
    });
  }

  updateCart();
}

const completeOrder = function () {
  cartItems.innerHTML = "";
  cartTotal.innerText = "Total (0 items):";
  cartAmount.innerText = 0;
  cart = [];
  closeCart();
  window.scrollTo(0, 0);
};

completeBtn.addEventListener("click", completeOrder);
