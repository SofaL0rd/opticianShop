// @ts-nocheck
import { createContext } from 'preact';
import { useContext, useState, useEffect} from 'preact/hooks';
import { useUser } from './UserProvider';

const BasketContext = createContext();

export function BasketProvider({ children }) {
    const [basket, setBasket] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { user } = useUser();

    useEffect(() => {
        const newTotalPrice = basket.reduce((total, product) => total + product.price * product.quantity, 0);
        setTotalPrice(newTotalPrice);
    }, [basket]);

     const addToBasket = (product) => {
        setBasket((prevBasket) => {
            const existingProductIndex = prevBasket.findIndex((p) => p.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedBasket = [...prevBasket];
            
            updatedBasket[existingProductIndex].quantity += 1;
            return updatedBasket;
        } else {
            return [...prevBasket, product];      }
    });
  };
    const clearBasket = () => {
        setBasket([]);
    };
    const removeFromBasket = (productId) => {
        setBasket((prevBasket) => {
            prevBasket.find((p) => p.id === productId).quantity = 0;
            return prevBasket.filter((p) => p.id !== productId);
        });

    };
    
    const sendOrder = async () => {
        if (user && basket.length > 0) {
            try {
                const response = await fetch('http://localhost:3001/api/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: user.id,
                        products: basket,
                        totalPrice: totalPrice
                    }),
                });

                if (!response.ok) {
                    console.error('Error sending order to database:', response.statusText);
                }
                
            } catch (error) {
                console.error('Error sending order to database:', error);
            }
        }
    };

    return (
        <BasketContext.Provider value={{ basket, totalPrice, addToBasket, removeFromBasket, sendOrder, clearBasket }}>
            {children}
        </BasketContext.Provider>
    );
}


export const useBasket = () => useContext(BasketContext);
