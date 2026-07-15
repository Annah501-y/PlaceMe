import { Link } from "react-router-dom";
import Button from "../ui/Button";

function RestaurantCard({
  name,
  image,
  location,
  rating,
  deliveryTime,
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">

      {/* Restaurant image should be stored in:
          src/assets/restaurants/
          Example:
          src/assets/restaurants/burger-house.jpg
      */}
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover"
      />


      <div className="p-5">

        <h3 className="text-xl font-semibold text-gray-800">
          {name}
        </h3>


        <p className="mt-2 text-sm text-gray-500">
          {location}
        </p>


        <div className="mt-3 flex justify-between text-sm">

          <span className="text-orange-500">
            Rating: {rating}
          </span>

          <span className="text-gray-600">
            {deliveryTime}
          </span>

        </div>


        <Link
          to="/restaurants">
        <Button className="mt-5 w-full">
          View Menu
        </Button>
        </Link>

      </div>

    </div>
  );
}

export default RestaurantCard;