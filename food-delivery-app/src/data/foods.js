// Mock food data.
// Replace this with API data when the backend is ready.

import biryan from "../assets/foods/biryan.jpg";
import burger from "../assets/foods/burger.jpg";
import pizza from "../assets/foods/pizza.jpg";
import chips from "../assets/foods/chips.jpg";

const foods = [
  {
    id: 1,
    name: "Chicken Biryani",
    restaurant: "Taste Hub",
    image: biryan,
    price: 12000,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Classic Beef Burger",
    restaurant: "City Bites",
    image: burger,
    price: 15000,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    restaurant: "Urban Pizza",
    image: pizza,
    price: 18000,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Chips Mayai",
    restaurant: "Mama Amina Kitchen",
    image: chips,
    price: 8000,
    rating: 4.9,
  },
];

export default foods;