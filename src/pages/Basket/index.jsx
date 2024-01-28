// @ts-nocheck
import { useState } from 'preact/hooks';
import { Button } from 'flowbite-react';
import {useBasket} from '../../providers/BasketProvider';

export function Basket() {
    const { basket, removeFromBasket, sendOrder, totalPrice, clearBasket } = useBasket();
    const [orderPlaced, setOrderPlaced] = useState(false);


    const orderHandler = () => {
        console.log(basket);
        setOrderPlaced(true);
        sendOrder();
        clearBasket();
    }
    
    if (orderPlaced) {
        return (
            <div>
                <h2 className='text-5xl my-5 '>Thank you for your order</h2>
                <p>Your order #{ }</p>
                <p>We will contact you when it's ready.</p>
            </div>
        );
    }

    return (
        <div className='flex flex-col self-start py-5'>
            <h2 className='text-5xl my-5 '>Your Basket</h2>
            {basket.length === 0 ? (
                <p>Your basket is empty</p>
            ) : (
                <div>
                    {basket.map((product) => (
                        <div key={product.id} className="flex items-center justify-between border-b py-2">
                            <img className=" h-20 w-28  object-cover mb-0 mr-4" src={product.pics} alt={product.name} />
                            <div className="flex flex-col mx-4 items-start">
                                <h3 className='text-xl'>{product.name} </h3>
                                <p className="font-bold text-xl">{product.price * product.quantity} ₴</p>
                                <p>Quantity: {product.quantity}</p>

                            </div>
                            <Button color='failure' size='sm' onClick={() => removeFromBasket(product.id)}>Remove</Button>
                        </div>
                    ))}
                    <div className="mt-4 flex justify-between">
                            <p className="font-bold text-3xl">Total: ${totalPrice}</p>
                            <Button color='success' className='' onClick={orderHandler} > Place order</Button>
                    </div>
                </div>
            )}
        </div>
    );
}
