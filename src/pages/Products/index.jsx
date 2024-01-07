// @ts-nocheck

import preactLogo from '../../assets/preact.svg';
import ProductContext from './ProductProvider';
import { useContext } from 'preact/hooks'
import { Card } from 'flowbite-react';

import './style.css';


export function Products() {
    const products = useContext(ProductContext);
    console.log(products);
	// return (
    //     <div>
            
    //         {products.map((product)=>(
    //             <Card
    //             className="max-w-sm"
    //             imgAlt={product.name}
    //             imgSrc="/images/products/apple-watch.png"
    //             >
    //             <a href="#">
    //                 <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
    //                 {product.name}
    //                 </h5>
    //             </a>
    //             <div className="flex items-center justify-between">
    //                 <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
    //                 <a
    //                 href="#"
    //                 className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
    //                 >
    //                 Add to cart
    //                 </a>
    //             </div>
    //             </Card>
    //   ))}
    //   </div>
    return (
        <div>
          {products.map((product) => (
            // Render your Card components here using the product data
            <Card
              key={product.id}
              className="max-w-sm"
              imgAlt={product.name}
              imgSrc="/images/products/apple-watch.png"
            >
              {/* Render product details */}
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </Card>
          ))}
        </div>
	);
}


