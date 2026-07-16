import { useState } from "react";
import PageHeader from "../../component/layout/PageHeader";
import SearchBar from "../../component/forms/SearchBar";
import RestaurantCard from "../../component/cards/RestaurantCard";
import restaurants from "../../data/restaurants";
import EmptyState from "../../component/ui/EmptyState";

function Restaurants() {
  const [search, setSearch] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHeader
        title="Restaurants"
        subtitle="Discover the best restaurants delivering delicious meals near you."
      />

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search restaurants..."
          />

          {filteredRestaurants.length > 0 ? (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))}
            </div>
          ) : (
            <div className="mt-16">
              <EmptyState
                title="No restaurants found"
                description="Try searching with a different restaurant name."
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Restaurants;