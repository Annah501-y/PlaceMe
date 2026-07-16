import { Link } from "react-router-dom";
import restaurants from "../../data/restaurants";
import RestaurantCard from "../cards/RestaurantCard";

function FeaturedRestaurants() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-semibold uppercase tracking-widest text-orange-500">
              Top Restaurants
            </p>

            <h2 className="mt-2 text-4xl font-bold text-gray-900">
              Featured Restaurants
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Discover the highest-rated restaurants near you and enjoy
              delicious meals delivered quickly to your doorstep.
            </p>
          </div>

          <Link
            to="/restaurants"
            className="rounded-lg border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
          >
            View All
          </Link>
        </div>

        {/* Restaurant Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRestaurants;