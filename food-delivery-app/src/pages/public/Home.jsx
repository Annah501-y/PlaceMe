import Hero from "../../component/home/Hero";
import Categories from "../../component/home/Categories";
import FeaturedRestaurants from "../../component/home/FeaturedRestaurants";
import PopularMeals from "../../component/home/PopularMeals";
import WhyChooseUs from "../../component/home/WhyChooseUs";
import Testimonials from "../../component/home/Testimonials";
import DownloadApp from "../../component/home/DownloadApp";
import CTA from "../../component/home/CTA";
import Footer from "../../component/layout/Footer";

function Home() {
  return (
    <>
     <Hero/>

      <Categories />
      <FeaturedRestaurants/>
      <PopularMeals/>
      <WhyChooseUs/>
      <Testimonials/>
      <DownloadApp/>
      <CTA/> 
    </>
  );
}

export default Home;