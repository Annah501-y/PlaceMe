

/*Increase user conversions by directing visitors toward ordering food or browsing available restaurants.*/

import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="bg-orange-300 py-20">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-white">
          Ready to Order Your Favorite Meal?
        </h2>

        {/* Supporting Message */}
        <p className="mt-4 text-lg text-orange-100">
          Discover hundreds of restaurants, explore delicious meals,
          and get food delivered straight to your doorstep.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <Button>
            Order Now
          </Button>

          <Button >
            Explore Restaurants
          </Button>

        </div>

      </div>

    </section>
  );
};

export default CTA;