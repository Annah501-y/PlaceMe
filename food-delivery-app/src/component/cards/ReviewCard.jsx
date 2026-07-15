

import { Star, Quote } from "lucide-react";

/* Purpose: Display a single customer testimonial in a consistent format.*/
const ReviewCard = ({ name, rating, comment }) => {
 
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm
        p-6
        flex
        flex-col
        gap-4
        transition-all
        duration-300
        hover:shadow-lg
      "
    >
      {/* Decorative quote icon */}
      <Quote className="h-8 w-8 text-orange-500" />

      {/* Customer Rating */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Customer Review */}
      <p className="text-sm leading-relaxed text-gray-600 italic">
        "{comment}"
      </p>

      {/* Customer Information */}
      <div className="flex items-center gap-3 pt-2">

        {/* Initial-based Avatar */}
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-orange-500
            text-sm
            font-semibold
            text-white
          "
        >
          {initial}
        </div>

        {/* Customer Name */}
        <div>
          <h4 className="font-semibold text-gray-900">
            {name}
          </h4>

          <p className="text-xs text-gray-500">
            Verified Customer
          </p>
        </div>

      </div>
    </div>
  );
};

export default ReviewCard;