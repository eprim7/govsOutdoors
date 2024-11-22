import React, { useEffect, useState, useContext } from 'react';
import Header from "../../components/Header/Header";
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
          setProducts([]);
        }
      })
      .catch(error => console.error('Error fetching gear data:', error));
  }, []);

  
  return (
    <>
      <Header />
      <h1 className={styles.title}>Shop With Us!</h1>
      <div className={styles.productList}>
      {products.map(product => {
  const price = Number(product.price) || 0;
      return (
        <div key={product.gear_id} className={styles.productCard}>
          <img src={`/assets/${product.image_url}`} alt={product.name} className={styles.images}/>
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>${price.toFixed(2)}</p>
          <button 
            className={styles.addToCartButton} 
            onClick={() => addToCart({
                id: product.gear_id,
                name: product.name,
                price: product.price,
            })}
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