
import './ItemCount.css';
import { useState } from 'react';


const ItemCount = ({stock, initial, onAdd}) =>  {
    
    const [quantity, setQuantity]= useState(initial)

    const increment = () => {
        if (quantity < stock && quantity <= stock){
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }

    }

    return(
        <div className='Counter container-fluid rounded'>
            <div className='Controls row d-flex justify-content-center align-items-center'>
                <div className='col-3'>
                   <button className='Button btn_control rounded p-1' onClick={decrement}>-</button> 
                </div>
                <div className='text-center col-6'>
                    <h4 className='Number'>{quantity}</h4>
                </div>
                <div className='col-3'>
                    <button className='Button btn_control rounded p-1' onClick={increment}>+</button>
                </div>          
                <div className='col-12 d-flex justify-content-center'>
                    <button className='Button btn_add mb-1 p-2 rounded' onClick={()=>onAdd(quantity)} disabled={!stock}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>

    );

}

export default ItemCount