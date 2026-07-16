import { Link } from "react-router-dom";
import { Clock3, MapPin, Star } from "lucide-react";
import Button from "../ui/Button";

function RestaurantCard({ restaurant }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Restaurant Image */}
      <div className="overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="space-y-4 p-6">
        {/* Restaurant Name */}
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {restaurant.name}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-gray-500">
            <MapPin size={16} />
            <span>{restaurant.location}</span>
          </div>
        </div>

        {/* Rating & Delivery */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="font-medium">
              {restaurant.rating}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <Clock3 size={16} />
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>

        {/* Restaurant Category */}
        <div>
          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
            {restaurant.category}
          </span>
        </div>

        {/* View Menu Button */}
        <Link to={`/restaurants/${restaurant.id}`}>
          <Button className="mt-2 w-full">
            View Menu
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default RestaurantCard;