import FoodCard from "../cards/FoodCard";
import foods from "../../data/foods";

function PopularMeals() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Popular Meals
        </h2>

        <p className="mt-2 text-gray-600">
          Explore some of the most popular meals ordered by our customers.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            {...food}
          />
        ))}
      </div>

    </section>
  );
}

export default PopularMeals;