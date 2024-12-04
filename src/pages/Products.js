import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import './Products.css';

function Products() {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Pro Racket', price: 50, image: 'https://ae01.alicdn.com/kf/HTB1xZ5cPOrpK1RjSZFhq6xSdXXa2/2019-Genuine-Ma-Long-Dhs-Hurricane-Ma-Long-5x-Ma-Long-2-Arylate-Carbon-Alc-Table.jpg', 
      description: 'High-quality racket reccomended by the very famous legend Ma-Long.' },
    { id: 2, name: 'Tournament Balls', price: 10, image: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/147731/20/13257/97299/5fa4a4b7Ef8632ea6/5f495c6b6ebca0b5.jpg!q80.dpg', 
      description: 'Set of 6 tournament-grade balls, approved by the ITTF (International Table Tennis Federation).' },
    { id: 3, name: 'Training Net', price: 25, image: 'https://th.bing.com/th/id/R.7b2d1a19a209c7d91bc9d0e1de454d15?rik=8uaxOxTKM%2bZ8FQ&riu=http%3a%2f%2ftabletennisstore.eu%2fcdn%2fshop%2fproducts%2fKleding_Donic_Accecoires_Netten_donic_stress_netz_black_blue_1.jpg%3fv%3d1649435129&ehk=UvgHg2uDZNwfomxdO%2f6AwL3v5rrm9ZvtgfleVXaokq4%3d&risl=&pid=ImgRaw&r=0', 
      description: 'Durable net for training and practice.' },
    { id: 4, name: 'Table Tennis Table', price: 500, image: 'https://tennis2table.com/wp-content/uploads/2023/08/table-tibhar-700w.jpg', 
      description: 'Professional-grade table tennis table.' },
  ];

  const handleModalOpen = (product) => {
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-page">
      <h1>Available Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} onClick={() => handleModalOpen(product)} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleModalClose}>
              &times;
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;