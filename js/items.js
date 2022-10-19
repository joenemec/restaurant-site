"use strict";

const menuSections = [
  "Appetizers",
  "Happy Hour",
  "Salads",
  "Beverages",
  "Sushi Rolls",
  "Bento Boxes",
  "Specials",
  "Chef's Choice",
  "Phó Bo",
  "Bánh Mì",
  "Vermicelli",
  "Sashimi",
  "Maki Rolls",
  "Ramen",
  "Fried Rice",
  "Pad Thai",
  "Curry",
];

let allMenuItems = [
  // //note: 1. APPETIZERS
  {
    itemId: 0,
    itemName: "Edamame",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Appetizers",
  },
  {
    itemId: 1,
    itemName: "Gyoza",
    itemPrice: 5.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Appetizers",
  },
  {
    itemId: 2,
    itemName: "Stuffed Jalapeno",
    itemPrice: 7.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Appetizers",
  },
  {
    itemId: 3,
    itemName: "Harumaki",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Appetizers",
  },
  {
    itemId: 4,
    itemName: "Yellowtail Haven",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Appetizers",
  },
  {
    itemId: 5,
    itemName: "Spicy Tuna Balls",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Appetizers",
  },
  {
    itemId: 6,
    itemName: "Spring Roll",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Appetizers",
  },
  {
    itemId: 7,
    itemName: "Egg Roll",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Appetizers",
  },
  {
    itemId: 8,
    itemName: "Meatball Soup",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Appetizers",
  },
  {
    itemId: 9,
    itemName: "Miso Soup",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Appetizers",
  },
  // //note: 2. HAPPY HOUR
  {
    itemId: 10,
    itemName: "Spicy Tuna Roll",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Happy Hour",
  },
  {
    itemId: 11,
    itemName: "Philadelphia Roll",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Happy Hour",
  },
  {
    itemId: 12,
    itemName: "Salmon Avocado Roll",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Happy Hour",
  },
  {
    itemId: 13,
    itemName: "Tempura Shrimp Roll",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Happy Hour",
  },
  {
    itemId: 14,
    itemName: "Dynamite Roll",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Happy Hour",
  },
  {
    itemId: 15,
    itemName: "Spider Roll",
    itemPrice: 6.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Happy Hour",
  },
  {
    itemId: 16,
    itemName: "Crazy Boy Roll",
    itemPrice: 6.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Happy Hour",
  },
  {
    itemId: 17,
    itemName: "Sumo Roll",
    itemPrice: 6.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Happy Hour",
  },
  {
    itemId: 18,
    itemName: "Sunset Roll",
    itemPrice: 7.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",
    itemSection: "Happy Hour",
  },
  {
    itemId: 19,
    itemName: "Jungle Roll",
    itemPrice: 6.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Happy Hour",
  },
  {
    itemId: 20,
    itemName: "Edamame",
    itemPrice: 2.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Happy Hour",
  },
  {
    itemId: 21,
    itemName: "Gyoza",
    itemPrice: 3.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Happy Hour",
  },
  {
    itemId: 22,
    itemName: "Stuffed Jalapeno",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Happy Hour",
  },
  // note: 3. SALADS
  {
    itemId: 23,
    itemName: "Cucumber Salad",
    itemPrice: 3.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Salads",
  },
  {
    itemId: 24,
    itemName: "Avocado Salad",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Salads",
  },
  {
    itemId: 25,
    itemName: "Seaweed Salad",
    itemPrice: 3.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Salads",
  },
  {
    itemId: 26,
    itemName: "Squid Salad",
    itemPrice: 5.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Salads",
  },
  {
    itemId: 27,
    itemName: "Baby Octopus Salad",
    itemPrice: 6.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Salads",
  },
  {
    itemId: 28,
    itemName: "Sashimi Salad",
    itemPrice: 15.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Salads",
  },
  // note: 4. BEVERAGES
  {
    itemId: 29,
    itemName: "Vietnamese Iced Coffee",
    itemPrice: 2.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Beverages",
  },
  {
    itemId: 30,
    itemName: "Vietnamese Hot Coffee",
    itemPrice: 2.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Beverages",
  },
  {
    itemId: 31,
    itemName: "Thai Tea",
    itemPrice: 2.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Beverages",
  },
  {
    itemId: 32,
    itemName: "Hot Tea",
    itemPrice: 1.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Beverages",
  },
  {
    itemId: 33,
    itemName: "Iced Tea",
    itemPrice: 1.75,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Beverages",
  },
  {
    itemId: 34,
    itemName: "Fountain Drinks",
    itemPrice: 1.75,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Beverages",
  },
  // note: 5. SUSHI ROLLS
  {
    itemId: 35,
    itemName: "Red Sea Special Roll",
    itemPrice: 14.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 36,
    itemName: "Phó Roll",
    itemPrice: 14.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 37,
    itemName: "Crazy Boy Roll",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 38,
    itemName: "Sumo Roll",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 39,
    itemName: "Tornado Roll",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 40,
    itemName: "Town Roll",
    itemPrice: 12.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 41,
    itemName: "Jungle Roll",
    itemPrice: 11.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 42,
    itemName: "Sunset Roll",
    itemPrice: 11.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 43,
    itemName: "Yummy Yummy Roll",
    itemPrice: 11.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 44,
    itemName: "Samurai Roll",
    itemPrice: 13.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 45,
    itemName: "Mt. Everest Roll",
    itemPrice: 12.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 46,
    itemName: "Q Roll",
    itemPrice: 12.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 47,
    itemName: "Salmon Lover Roll",
    itemPrice: 11.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 48,
    itemName: "Fire Dragon Roll",
    itemPrice: 12.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 49,
    itemName: "Black & White Roll",
    itemPrice: 11.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 50,
    itemName: "Spicy Crunchy Roll",
    itemPrice: 12.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 51,
    itemName: "Alaska Roll",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 52,
    itemName: "Dragon Roll",
    itemPrice: 11.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 53,
    itemName: "Caterpillar Roll",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 54,
    itemName: "Rainbow Roll",
    itemPrice: 11.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  {
    itemId: 55,
    itemName: "Ahi Tower",
    itemPrice: 11.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sushi Rolls",
  },
  // note: 6. BENTO BOXES
  {
    itemId: 56,
    itemName: "Sushi Bento",
    itemPrice: 13.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Bento Boxes",
  },
  {
    itemId: 57,
    itemName: "Sashimi Bento",
    itemPrice: 13.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Bento Boxes",
  },
  {
    itemId: 58,
    itemName: "Fried Roll Bento",
    itemPrice: 11.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Bento Boxes",
  },
  {
    itemId: 59,
    itemName: "Spicy Roll Bento",
    itemPrice: 11.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Bento Boxes",
  },
  {
    itemId: 60,
    itemName: "Maki Roll Bento",
    itemPrice: 11.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Bento Boxes",
  },
  {
    itemId: 61,
    itemName: "Sushi & Sashimi Bento",
    itemPrice: 13.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Bento Boxes",
  },
  // note: 7. SPECIALS
  {
    itemId: 62,
    itemName: "Sahsimi Combo: A",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Specials",
  },
  {
    itemId: 63,
    itemName: "Sahsimi Combo: B",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Specials",
  },
  {
    itemId: 64,
    itemName: "Sahsimi Combo: C",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Specials",
  },
  {
    itemId: 65,
    itemName: "Sushi Combo: A",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Specials",
  },
  {
    itemId: 66,
    itemName: "Sushi Combo: B",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Specials",
  },
  {
    itemId: 67,
    itemName: "Sushi Combo: C",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Specials",
  },
  // note: 8. CHEF'S CHOICE
  {
    itemId: 68,
    itemName: "Sushi Platter",
    itemPrice: 27.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Chef's Choice",
  },
  {
    itemId: 69,
    itemName: "Sashimi Platter",
    itemPrice: 17.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Chef's Choice",
  },
  {
    itemId: 70,
    itemName: "Sushi & Sashimi",
    itemPrice: 39.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Chef's Choice",
  },
  {
    itemId: 71,
    itemName: "Love Boat",
    itemPrice: 49.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Chef's Choice",
  },
  // note: 9. PHO BO
  {
    itemId: 72,
    itemName: "Phó Tai",
    itemPrice: 7.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Phó Bo",
  },
  {
    itemId: 73,
    itemName: "Phó Chín",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Phó Bo",
  },
  {
    itemId: 74,
    itemName: "Phó Tai, Chín",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Phó Bo",
  },
  {
    itemId: 75,
    itemName: "Phó Bò Viên",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Phó Bo",
  },
  {
    itemId: 76,
    itemName: "Phó Tai, Bò Viên",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Phó Bo",
  },
  {
    itemId: 77,
    itemName: "Phó Chín, Bò Viên",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Phó Bo",
  },
  {
    itemId: 78,
    itemName: "Phó Tai, Chín, Bò Viên",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Phó Bo",
  },
  {
    itemId: 79,
    itemName: "Phó Tai, Gân",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Phó Bo",
  },
  {
    itemId: 80,
    itemName: "Phó Chín, Gân",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Phó Bo",
  },
  {
    itemId: 81,
    itemName: "Phó Gà",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Phó Bo",
  },
  {
    itemId: 82,
    itemName: "Phó Veggie",
    itemPrice: 7.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Phó Bo",
  },
  {
    itemId: 83,
    itemName: "Phó Vietnam Special",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Phó Bo",
  },
  // note: 10. BANH MI
  {
    itemId: 84,
    itemName: "Baguette Shredded Chicken",
    itemPrice: 6.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Bánh Mì",
  },
  {
    itemId: 85,
    itemName: "Baguette Grilled Pork",
    itemPrice: 6.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Bánh Mì",
  },
  // note: 11. VERMICELLI
  {
    itemId: 86,
    itemName: "Grilled Pork or Grilled Beef",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Vermicelli",
  },
  {
    itemId: 87,
    itemName: "Beef or Pork with Egg Rolls",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Vermicelli",
  },
  {
    itemId: 88,
    itemName: "Egg Rolls",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Vermicelli",
  },
  {
    itemId: 89,
    itemName: "Beef, Pork, and Shrimp with Egg Rolls",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Vermicelli",
  },
  {
    itemId: 90,
    itemName: "Grilled Chicken",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Vermicelli",
  },
  {
    itemId: 91,
    itemName: "Grilled Chicken with Egg Rolls",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Vermicelli",
  },
  {
    itemId: 92,
    itemName: "Grilled Chicken and Shrimp with Egg Rolls",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Vermicelli",
  },
  {
    itemId: 93,
    itemName: "Grilled Shrimp",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Vermicelli",
  },
  // note: 12. SASHIMI
  {
    itemId: 94,
    itemName: "Fresh Tuna (Maguro)",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sashimi",
  },
  {
    itemId: 95,
    itemName: "Fresh Salmon (Sake)",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sashimi",
  },
  {
    itemId: 96,
    itemName: "Smoked Salmon (Smoked Sake)",
    itemPrice: 5.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sashimi",
  },
  {
    itemId: 97,
    itemName: "White Tuna (Shiro-Maguro)",
    itemPrice: 5.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sashimi",
  },
  {
    itemId: 98,
    itemName: "Red Snapper (Tai)",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sashimi",
  },
  {
    itemId: 99,
    itemName: "Yellowtail (Hamachi)",
    itemPrice: 5.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sashimi",
  },
  {
    itemId: 100,
    itemName: "Shrimp (Ebi)",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sashimi",
  },
  {
    itemId: 101,
    itemName: "Eel (Ungai)",
    itemPrice: 6.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Sashimi",
  },
  // note: 13. MAKI ROLLS
  {
    itemId: 102,
    itemName: "California Roll",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 103,
    itemName: "Tuna Roll",
    itemPrice: 3.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 104,
    itemName: "Spicy Tuna Roll",
    itemPrice: 5.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 105,
    itemName: "Salmon Roll",
    itemPrice: 3.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 106,
    itemName: "Spicy Salmon Roll",
    itemPrice: 5.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 107,
    itemName: "Baked Eel Roll",
    itemPrice: 5.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 108,
    itemName: "Tempura Shrimp Roll",
    itemPrice: 6.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 109,
    itemName: "Philly Roll",
    itemPrice: 5.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 110,
    itemName: "Philly Medley Roll",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 111,
    itemName: "Salmon Avocado Roll",
    itemPrice: 5.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 112,
    itemName: "Spider Roll",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 113,
    itemName: "Dynamite Roll",
    itemPrice: 5.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 114,
    itemName: "Yellowtail Roll",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  {
    itemId: 115,
    itemName: "Vegetable Roll",
    itemPrice: 4.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Maki Rolls",
  },
  // note: 14. RAMEN
  {
    itemId: 116,
    itemName: "Tonkotsu (Hakata Style)",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Ramen",
  },
  {
    itemId: 117,
    itemName: "Tonkotsu Kuro",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Ramen",
  },
  {
    itemId: 118,
    itemName: "Spicy Miso (HokaitemIdo Style)",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Ramen",
  },
  {
    itemId: 119,
    itemName: "Shoyu (Tokyo Style)",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Ramen",
  },
  {
    itemId: 120,
    itemName: "Shio (Traditional Style)",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Ramen",
  },
  {
    itemId: 121,
    itemName: "Tan Tan Ramen",
    itemPrice: 11.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Ramen",
  },
  // note: 15. FRIED RICE
  {
    itemId: 122,
    itemName: "Chicken or Pork",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Fried Rice",
  },
  {
    itemId: 123,
    itemName: "Beef or Shrimp",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Fried Rice",
  },
  {
    itemId: 124,
    itemName: "Combination",
    itemPrice: 12.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Fried Rice",
  },
  {
    itemId: 125,
    itemName: "Vegetable",
    itemPrice: 7.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Fried Rice",
  },
  // note: 16. PAD THAI
  {
    itemId: 126,
    itemName: "Chicken or Pork",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Pad Thai",
  },
  {
    itemId: 127,
    itemName: "Beef or Shrimp",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Pad Thai",
  },
  {
    itemId: 128,
    itemName: "Combination",
    itemPrice: 12.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Pad Thai",
  },
  // note: 17. CURRY
  {
    itemId: 129,
    itemName: "Tofu Green Curry",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Curry",
  },
  {
    itemId: 130,
    itemName: "Chicken or Pork Green Curry",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Curry",
  },
  {
    itemId: 131,
    itemName: "Beef or Shrimp Green Curry",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Curry",
  },
  {
    itemId: 132,
    itemName: "Combination Green Curry",
    itemPrice: 12.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Curry",
  },
  {
    itemId: 133,
    itemName: "Tofu Panang Curry",
    itemPrice: 8.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Curry",
  },
  {
    itemId: 134,
    itemName: "Chicken or Pork Panang Curry",
    itemPrice: 9.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Curry",
  },
  {
    itemId: 135,
    itemName: "Beef or Shrimp Panang Curry",
    itemPrice: 10.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Curry",
  },
  {
    itemId: 136,
    itemName: "Combination Panang Curry",
    itemPrice: 12.99,
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Odit, earum!",

    itemSection: "Curry",
  },
];
