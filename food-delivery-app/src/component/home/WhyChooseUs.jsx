import { Bike,UtensilsCrossed, CreditCard, Headphones,} from "lucide-react";

import fastDelivery from "../../assets/features/fast-delivery.jpg";
import qualityFood from "../../assets/features/quality-food.jpg";
import easyPayment from "../../assets/features/easy-payment.jpg";
import support from "../../assets/features/support.jpg";

const features = [
  {
    id: 1,
    title: "Fast Delivery",
    description:
      "Get your food delivered in under 30 minutes, guaranteed.",
    icon: Bike,
    image: fastDelivery,
  },
  {
    id: 2,
    title: "Quality Food",
    description:
      "We partner only with top-rated restaurants near you.",
    icon: UtensilsCrossed,
    image: qualityFood,
  },
  {
    id: 3,
    title: "Easy Payments",
    description:
      "Pay with card, mobile money, or cash on delivery.",
    icon: CreditCard,
    image: easyPayment,
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Our support team is always available to help you out.",
    icon: Headphones,
    image: support,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>

          <p className="mt-3 text-gray-600">
            We make food ordering simple, fast, and reliable.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition duration-300"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                    <Icon className="h-7 w-7 text-orange-500" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;