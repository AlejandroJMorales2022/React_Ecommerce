import { useContext } from 'react';
import cart from './assets/carrito.png'
import './CartWidget.css';
import { CartContext } from '../../../context/CartContext';




const CartWidget = () => {

    const {countItemsCart} = useContext(CartContext)


    return(
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <img className='imgCart' src={cart} alt="cart-widget"/>
                </div>
                <div className='qty text-center'>
                    {countItemsCart}
                </div>
            </div>
        </>
       
    )
}

export default CartWidget