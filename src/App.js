import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import StoreInfo from './components/StoreInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <StoreInfo />
    </div>
  );
}

export default App;
