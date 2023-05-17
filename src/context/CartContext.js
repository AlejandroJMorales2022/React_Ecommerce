import { createContext, useEffect, useState } from "react";

const CartContext=createContext({
    cart:[],
})


const CartProvider = ({children}) =>{

    const [cart, setCart] =useState([]);
    const [countItemsCart, setCountItemsCart] =useState(0) 

    console.log(cart);

    const addItem = (item, quantity) =>{
        if (!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}] )
        }else{
        console.error ('El Producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdate);
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    useEffect(()=>{
            countItems();
    },[cart])

    const countItems = () =>{
       let count =0;
        cart.forEach(item => {
            count += item.quantity
        })

        setCountItemsCart(count)
    }
 
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, countItemsCart}}>
                {children}
        </CartContext.Provider>
    )
}
export {CartContext, CartProvider}