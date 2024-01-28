// @ts-nocheck

import ProductContext from '../../providers/ProductProvider';
import { useContext, useState, useEffect } from 'preact/hooks'
import { Card, Button, } from 'flowbite-react';
import { useBasket } from '../../providers/BasketProvider';

import './style.css';


export function Products({types}) {
    const products = useContext(ProductContext);
    const [sortedProducts, setSortedProducts] = useState([]);
    const { addToBasket } = useBasket();

   
    useEffect(() => {
        let filteredProducts = products.filter(product => product.type !== 'lense_glasses');

        if (types.length == 0) {
            setSortedProducts(filteredProducts);
        } else {
            setSortedProducts(filteredProducts.filter(product => types.includes(product.type)));
        }

    }, [products, types]);



    const sortProducts = (criteria) => {
        let sorted;
        switch (criteria) {
            case 'lowest':
                sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
                break;
            case 'highest':
                sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
                break;
            case 'a-z':
                sorted = [...sortedProducts].sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'z-a':
                sorted = [...sortedProducts].sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                sorted = sortedProducts;
        }

        setSortedProducts(sorted);
    };

    return (
        <div className='mx-auto'>

            <Button.Group className="m-2">
                <Button color='gray' onClick={() => sortProducts('a-z')}>A-z</Button>
                <Button color='gray' onClick={() => sortProducts('z-a')}>Z-a</Button>
                <Button color='gray' onClick={() => sortProducts('highest')}>By Highest Price</Button>
                <Button color='gray' onClick={() => sortProducts('lowest')}>By Lowest Price</Button>
            </Button.Group>


            <div className='flex flex-wrap  max-w-screen-2xl '>

                {sortedProducts.map((product) => (

                    <Card
                        key={product.id}
                        className=" max-w-60 min-w-60 mx-2 my-3 border-none  bg-inherit outline outline-3 outline-orange-800 "
                        imgAlt={product.name}
                        imgSrc={product.pics}
                    >
                        <div>
                            <a href={`/product/${product.id}`} className="text-2xl font-semibold tracking-tight text-white">
                                {product.name}
                            </a>
                            <p className=' text-sm my-2 text-slate-300'>
                                {product.desc}
                            </p>
                            <div className="flex  items-center justify-center">
                                <span className="text-xl mx-4 font-bold text-white">${product.price}</span>
                                <Button size="sm" color="lime" onClick={()=>addToBasket(product)} className='bg-lime-700 text-white hover:text-slate-800  active:bg-lime-300'
                                >
                                    Add to cart
                                </Button>
                            </div>
                        </div>


                    </Card>
                ))}
            </div>
        </div>

    );
}


