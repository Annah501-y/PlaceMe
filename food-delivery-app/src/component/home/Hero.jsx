import Button from "../ui/Button";
import deliveryImage from "../../assets/hero/delivery.png";

function Hero() {
  return (
    <section className="bg-orange-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">

        {/* Hero Content */}
        <div>
          <h1 className="text-5xl font-bold leading-tight text-gray-800">
            Your Favorite Food,
            <span className="text-orange-500"> Delivered Fast</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Order from your favorite restaurants and enjoy delicious meals
            delivered directly to your doorstep.
          </p>

          <div className="mt-8 flex gap-4">
            <Button>
              Explore Restaurants
            </Button>

            <Button variant="secondary">
              Order Now
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">

          {/* image located in: src/assets/hero/hero-image.png*/}

          <img
            src={deliveryImage}
            alt="Food delivery"
            className="w-full max-w-md object-contain"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;