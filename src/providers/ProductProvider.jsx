// @ts-nocheck
import { createContext } from 'preact'
import { useState, useEffect } from 'preact/hooks'

const ProductContext = createContext();

export function ProductProvider({ children }) {
  
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  

  return (
    <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
  );
}

export default ProductContext

