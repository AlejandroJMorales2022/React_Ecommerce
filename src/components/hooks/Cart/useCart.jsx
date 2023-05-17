import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/CartContext"

const useCartContext = () => {

    const {cart, setCart} = useContext(CartContext)

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

    return(cart, addItem, removeItem, clearCart, countItemsCart)

}
export {useCartContext}