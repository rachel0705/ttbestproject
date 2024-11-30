import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import StoreInfo from '../components/StoreInfo';

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <StoreInfo />
    </div>
  );
}

export default Home;