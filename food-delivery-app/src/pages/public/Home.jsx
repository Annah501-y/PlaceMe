import Hero from "../../component/home/Hero";
import Categories from "../../component/home/Categories";
import FeaturedRestaurants from "../../component/home/FeaturedRestaurants";
import PopularMeals from "../../component/home/PopularMeals";
import WhyChooseUs from "../../component/home/WhyChooseUs";
import Testimonials from "../../component/home/Testimonials";

function Home() {
  return (
    <>
     <Hero/>

      <Categories />
      <FeaturedRestaurants/>
      <PopularMeals/>
      <WhyChooseUs/>
      <Testimonials/>
    </>
  );
}

export default Home;