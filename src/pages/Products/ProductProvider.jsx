// @ts-nocheck
import { createContext } from 'preact'
import { useState } from 'preact/hooks'

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    { id: 1, name: 'A Metal pivo glasses', type:"frame", price: 214, pic:"https://optical.shop/cdn/shop/files/Enmascarar_grupo_11.png?v=1689962707", desc: 'Some descr' },
    { id: 2, name: 'Plastic pivo glasses', type:"frame", price: 675, pic:"https://optical.shop/cdn/shop/files/Enmascarar_grupo_12.png?v=1689962728", desc: 'Some descr' },
    { id: 3, name: 'Metal with pivo plastic glasses',  type:"frame", pic:"https://optical.shop/cdn/shop/files/Enmascarar_grupo_13.png?v=1689962747", price: 950, desc: 'Some descr' },
    { id: 4, name: 'Metal glasses', type:"frame", price: 124, pic:"https://optical.shop/cdn/shop/files/Enmascarar_grupo_11.png?v=1689962707", desc: 'Some descr' },
    { id: 5, name: 'Plastic glasses', type:"frame", price: 687, pic:"https://optical.shop/cdn/shop/files/Enmascarar_grupo_12.png?v=1689962728", desc: 'Some descr' },
    { id: 6, name: 'Z Metal with plastic glasses', type:"frame", pic:"https://optical.shop/cdn/shop/files/Enmascarar_grupo_13.png?v=1689962747", price: 1080, desc: 'Some descr' },
    { id: 7, name: 'Clear38', type:"contLense", price: 650, pic:"https://images.ctfassets.net/u4vv676b8z52/5KgAiEOt7rEbyU5dudm54C/0dcb4f52ceb037261520603020b6000e/contacts_contact_lens_basics.jpg?fm=jpg&q=80"
    , desc: 'Some descr' },
    { id: 8, name: 'Optima', type:"contLense", price: 480, pic:"https://www.visioneyecentre.com/storage/uploads/images/services/thumb-contact-lens-low-vision-aids-6002befb5e65e.jpeg"
    , desc: 'Some descr' },
    { id: 9, name: 'AirOptix', type:"contLense", price: 950, pic:"https://www.downtowneyes.com/wp-content/uploads/2020/09/file.jpg"
    , desc: 'Some descr' },

]);

  return (
    <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
  );
}

export default ProductContext

