// @ts-nocheck
import { createContext } from 'preact'
import { useState } from 'preact/hooks'

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    { id: 1, name: 'Metal glasses', price: 950, pic:"https://optical.shop/cdn/shop/files/Enmascarar_grupo_11.png?v=1689962707", desc: 'Some descr' },
    { id: 2, name: 'Plastic glasses', price: 950, pic:"https://optical.shop/cdn/shop/files/Enmascarar_grupo_12.png?v=1689962728", desc: 'Some descr' },
    { id: 3, name: 'Metal with plastic glasses', pic:"https://optical.shop/cdn/shop/files/Enmascarar_grupo_13.png?v=1689962747", price: 950, desc: 'Some descr' },
    { id: 4, name: 'Metal glasses', price: 950, pic:"https://optical.shop/cdn/shop/files/Enmascarar_grupo_11.png?v=1689962707", desc: 'Some descr' },
    { id: 5, name: 'Plastic glasses', price: 950, pic:"https://optical.shop/cdn/shop/files/Enmascarar_grupo_12.png?v=1689962728", desc: 'Some descr' },
    { id: 6, name: 'Metal with plastic glasses', pic:"https://optical.shop/cdn/shop/files/Enmascarar_grupo_13.png?v=1689962747", price: 950, desc: 'Some descr' },
]);

  return (
    <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
  );
}

export default ProductContext

