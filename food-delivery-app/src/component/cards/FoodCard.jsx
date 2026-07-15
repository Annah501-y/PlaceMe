function FoodCard({
    name,
    restaurant,
    image,
    price,
    rating,
  }) {
    return (
      <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
  
        {/* Food image from src/assets/foods */}
        <img
          src={image}
          alt={name}
          className="h-56 w-full object-cover"
        />
  
        <div className="p-5">
  
          <h3 className="text-xl font-semibold text-gray-800">
            {name}
          </h3>
  
          <p className="mt-1 text-sm text-gray-500">
            {restaurant}
          </p>
  
          <div className="mt-4 flex items-center justify-between">
            <span className="font-semibold text-orange-500">
              TZS {price.toLocaleString()}
            </span>
  
            <span className="text-sm text-gray-600">
              {rating} ★
            </span>
          </div>
  
          <button
            className="mt-5 w-full rounded-lg bg-orange-500 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            Add to Cart
          </button>
  
        </div>
      </div>
    );
  }
  
  export default FoodCard;