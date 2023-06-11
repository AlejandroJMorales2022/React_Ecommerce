import { createContext, useEffect, useState } from "react";

const CartContext = createContext({

})




const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [countItemsCart, setCountItemsCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderGenerated, setOrderGenerated] = useState({})
    const [cartLS, setCartLS] = useState([])



    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error('El Producto ya fue agregado');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdate);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    const loadLocalStorage = (user) => {
        const cartLocal = JSON.parse(localStorage.getItem('Cart_Lepen_' + user)) || [];
        if (cartLocal.length > 0) {
            setCart(cartLocal);
        } else {
            setCart([]);
        }

    }

    useEffect(() => {
        countItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    const countItems = () => {
        let count = 0;
        let price = 0;
        cart.forEach(item => {
            count += item.quantity;
            price += parseFloat(item.price) * parseInt(item.quantity);
        })
        setCountItemsCart(count);
        setTotalPrice(price);
    }

    return (
        <CartContext.Provider value={{
            cart, setCart, addItem, removeItem, clearCart,
            countItemsCart, totalPrice, orderGenerated, setOrderGenerated, cartLS,
            setCartLS, loadLocalStorage, isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export { CartContext, CartProvider }