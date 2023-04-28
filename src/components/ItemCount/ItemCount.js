
import './ItemCount.css';
import { useState } from 'react';


const ItemCount = ({stock, initial, onAdd, MostrarAlert}) =>  {
    console.log("hola "+onAdd)
    const [quantity, setQuantity]= useState(initial)

    const increment = () => {
        if (quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }

    }
 /*    const MostrarAlert=(pipo)=>{
        alert(pipo)
    } */
    return(
        <div className='Counter container-fluid rounded'>
            <div className='Controls d-flex justify-content-center align-items-center'>
                <div>
                   <button className='Button btn_control p-2 rounded' onClick={decrement}>-</button> 
                </div>
                <div>
                    <h4 className='Number p-4'>{quantity}</h4>
                </div>
                <div>
                    <button className='Button btn_control p-2 rounded' onClick={increment}>+</button>
                </div>
                
            </div>
            <div>
                <button className='Button btn_add mb-3 p-3 rounded' onClick={()=>onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>

    );

}

export default ItemCount