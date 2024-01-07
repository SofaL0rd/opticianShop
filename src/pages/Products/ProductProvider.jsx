// @ts-nocheck
import { createContext } from 'preact'
import { useState } from 'preact/hooks'

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    { id: 1, name: 'Metal glasses', price: 950, description: 'Some descr' },
    { id: 2, name: 'Plastic glasses', price: 950, description: 'Some descr' },
    { id: 3, name: 'Metal with plastic glasses', price: 950, description: 'Some descr' },
  ]);

  return (
    <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
  );
}

export default ProductContext

