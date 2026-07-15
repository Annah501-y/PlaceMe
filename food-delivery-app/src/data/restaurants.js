// Mock restaurant data.
// Replace this file with API data in the future.

import restaurantOne from "../assets/restaurants/burger point.jpg";
import restaurantTwo from "../assets/restaurants/restaurant-2.jpg";
import restaurantThree from "../assets/restaurants/restaurant-3.jpg";

const restaurants = [
  {
    id: 1,
    name: "Taste Hub",
    image: restaurantOne,
    cuisine: "Fast Food",
    location: "Mlimani City, Dar es Salaam",
    rating: 4.8,
    deliveryTime: "20 - 30 min",
    deliveryFee: 2000,
    isOpen: true,
  },
  {
    id: 2,
    name: "City Bites",
    image: restaurantTwo,
    cuisine: "African",
    location: "Mwenge, Dar es Salaam",
    rating: 4.6,
    deliveryTime: "25 - 35 min",
    deliveryFee: 1500,
    isOpen: true,
  },
  {
    id: 3,
    name: "Ocean Grill",
    image: restaurantThree,
    cuisine: "Seafood",
    location: "Masaki, Dar es Salaam",
    rating: 4.9,
    deliveryTime: "30 - 40 min",
    deliveryFee: 3000,
    isOpen: false,
  },
];

export default restaurants;