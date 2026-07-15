

import ReviewCard from "../cards/ReviewCard";

/* This can later be replaced with data from a backend service (e.g. testimonialService.js)*/
const testimonials = [
  {
    id: 1,
    name: "Sarah K.",
    rating: 5,
    comment:
      "The food arrived hot and fast. Best delivery app I've used so far.",
  },
  {
    id: 2,
    name: "James M.",
    rating: 4,
    comment:
      "Great variety of restaurants and the ordering process is very simple.",
  },
  {
    id: 3,
    name: "Aisha R.",
    rating: 5,
    comment:
      "Customer support was responsive and resolved my issue immediately.",
  },
];


const Testimonials = () => {
  return (
    <section className="bg-white py-20">

      {/* 
        Main content container.
        Keeps content aligned with the rest of the application.
      */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Real experiences from customers who trust our platform
            for fast, reliable, and convenient food delivery.
          </p>

        </div>

        {/* Responsive testimonial grid.*/}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <ReviewCard
              key={testimonial.id}
              name={testimonial.name}
              rating={testimonial.rating}
              comment={testimonial.comment}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;