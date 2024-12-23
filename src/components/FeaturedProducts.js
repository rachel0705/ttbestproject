import React from 'react';
import './FeaturedProducts.css';

function FeaturedProducts() {
  const products = [
    { name: 'Professional Ma-Long Racket', price: '$50', image: 'https://ae01.alicdn.com/kf/HTB1xZ5cPOrpK1RjSZFhq6xSdXXa2/2019-Genuine-Ma-Long-Dhs-Hurricane-Ma-Long-5x-Ma-Long-2-Arylate-Carbon-Alc-Table.jpg' },
    { name: 'Tournament Balls', price: '$10', image: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/147731/20/13257/97299/5fa4a4b7Ef8632ea6/5f495c6b6ebca0b5.jpg!q80.dpg' },
    { name: 'Training Net', price: '$25', image: 'https://th.bing.com/th/id/R.7b2d1a19a209c7d91bc9d0e1de454d15?rik=8uaxOxTKM%2bZ8FQ&riu=http%3a%2f%2ftabletennisstore.eu%2fcdn%2fshop%2fproducts%2fKleding_Donic_Accecoires_Netten_donic_stress_netz_black_blue_1.jpg%3fv%3d1649435129&ehk=UvgHg2uDZNwfomxdO%2f6AwL3v5rrm9ZvtgfleVXaokq4%3d&risl=&pid=ImgRaw&r=0' },
  ];

  return (
    <section id="featured-products" className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            {/* Replace with actual image paths */}
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {/* Add buttons or links for more actions */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
