import React from "react";
import Hero from '../components/Hero/Hero.js';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts.js';
import Categories from '../components/Categories/Categories.js';

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
    </>
  );
}

export default Home;