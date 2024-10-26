import React, { useEffect, useState, useContext } from 'react';
import Header from "../../components/Header/Header";
// import productsData from '../../data/products';
import styles from './Gear.module.css';
import { CartContext } from '../../context/CartContext';

function Gear() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('http://localhost/gear.php')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);  // Fallback to empty array if data is not an array
        }
      })
      .catch(error => console.error('Error fetching gear data:', error));
  }, []);
  
  return (
    <>
      <Header />
      <h1 className={styles.title}>Gear Page</h1>
      <div className={styles.productList}>
      {products.map(product => {
        const price = Number(product.price) || 0; // Convert to a number, or use 0 as fallback
        return (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>${price.toFixed(2)}</p> {/* Use price variable */}
            <button 
              className={styles.addToCartButton} 
              onClick={() => addToCart(product)}
            >
        Add to Cart
      </button>
    </div>
  );
})}
      </div>
    </>
  );
}

export default Gear;