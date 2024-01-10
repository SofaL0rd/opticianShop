// @ts-nocheck

import preactLogo from '../../assets/preact.svg';
import ProductContext from './ProductProvider';
import { useContext } from 'preact/hooks'
import { Card, Button } from 'flowbite-react';

import './style.css';


export function Products() {
    const products = useContext(ProductContext);
	return (
        <div className='flex row '>
            
            {products.map((product)=>(
                <Card
                className=" max-w-60 m-2 border-none bg-inherit outline outline-3 outline-orange-800 "
                imgAlt={product.name}
                imgSrc={product.pic}
                >
                <div>
                    <a  href="#" className="text-2xl font-semibold tracking-tight text-white">
                        {product.name}
                    </a>
                    <p className='text-md my-2 text-slate-300'>
                        {product.desc}
                    </p>
                    <div className="flex  items-center justify-center">
                        <span className="text-xl mx-4 font-bold text-white">${product.price}</span>
                        <Button size="xs" color="lime" className='bg-lime-700 text-white hover:text-slate-800  active:bg-lime-300' 
                         >
                        Add to cart
                        </Button>
                    </div>
                </div>
                
               
                </Card>
      ))}
      </div>
    // return (
    //     <div>
    //       {products.map((product) => (
    //         // Render your Card components here using the product data
    //         <Card
    //           key={product.id}
    //           className="max-w-sm"
    //           imgAlt={product.name}
    //           imgSrc="/images/products/apple-watch.png"
    //         >
    //           {/* Render product details */}
    //           <h5>{product.name}</h5>
    //           <p>{product.description}</p>
    //           <p>${product.price}</p>
    //         </Card>
    //       ))}
    //     </div>
	);
}


