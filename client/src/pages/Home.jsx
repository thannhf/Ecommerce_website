import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
import Blog from "../components/Blog";
import banner from "../assets/banner.png";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <PopularProducts />
      <div className="max-padd-container lg:py-8 overflow-hidden">
        <img src={banner} alt="bannerImg" className="rounded min-w-[711px] w-full max-w-none object-cover" />
      </div>
      <Blog />
    </>
  );
};

export default Home;
