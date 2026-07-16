import burgerPoint from "../assets/restaurants/burger point.jpg";
import restaurant2 from "../assets/restaurants/restaurant-2.jpg";
import restaurant3 from "../assets/restaurants/restaurant-3.jpg";

const restaurants = [
  {
    id: 1,
    name: "Burger Point",
    image: burgerPoint,
    location: "Mlimani City, Dar es Salaam",
    rating: 4.8,
    deliveryTime: "20 - 30 min",
    category: "Fast Food",
  },
  {
    id: 2,
    name: "Italian Kitchen",
    image: restaurant2,
    location: "Masaki, Dar es Salaam",
    rating: 4.7,
    deliveryTime: "25 - 35 min",
    category: "Italian",
  },
  {
    id: 3,
    name: "Chicken House",
    image: restaurant3,
    location: "Mwenge, Dar es Salaam",
    rating: 4.9,
    deliveryTime: "15 - 25 min",
    category: "Grill & BBQ",
  },
];

export default restaurants;