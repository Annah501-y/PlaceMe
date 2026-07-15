import Hero from "../../component/home/Hero";
import Categories from "../../component/home/Categories";
import FeaturedRestaurants from "../../component/home/FeaturedRestaurants";
import PopularMeals from "../../component/home/PopularMeals";

function Home() {
  return (
    <>
     <Hero/>

      <Categories />
      <FeaturedRestaurants/>
      <PopularMeals/>
    </>
  );
}

export default Home;