import CategoryCard from "../cards/CategoryCard";

// Images should be stored inside:
// src/assets/categories/
// Example files:
// pizza.jpg
// burger.jpg
// drinks.jpg
// chicken.jpg

import pizzaImage from "../../assets/categories/pizza.jpg";
import burgerImage from "../../assets/categories/burger.jpg";
import chickenImage from "../../assets/categories/chicken.jpg";
import drinksImage from "../../assets/categories/drinks.jpg";


function Categories() {

  const categories = [
    {
      name: "Pizza",
      image: pizzaImage,
    },
    {
      name: "Burgers",
      image: burgerImage,
    },
    {
      name: "Chicken",
      image: chickenImage,
    },
    {
      name: "Drinks",
      image: drinksImage,
    },
  ];


  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <h2 className="text-3xl font-bold text-gray-800">
        Explore Categories
      </h2>


      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">

        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
          />
        ))}

      </div>

    </section>
  );
}

export default Categories;