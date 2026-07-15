import RestaurantCard from "../cards/RestaurantCard";
import restaurants from "../../data/restaurants";

function FeaturedRestaurants() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Restaurants
          </h2>

          <p className="mt-2 text-gray-600">
            Discover some of the most popular restaurants near you.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            {...restaurant}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedRestaurants;