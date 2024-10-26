import React, { useEffect, useState, useContext } from 'react';
import Header from "../../components/Header/Header";
import productsData from '../../data/products';
import styles from './Gear.module.css';
import { CartContext } from '../../context/CartContext';

function Gear() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <Header />
      <h1 className={styles.title}>Gear Page</h1>
      <div className={styles.productList}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
            <button 
              className={styles.addToCartButton} 
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gear;