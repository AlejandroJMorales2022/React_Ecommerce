import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const Cart = ()=>{

    const {cart, totalPrice} = useContext(CartContext)
    
    
    
    return(
        <div className="container pt-4">
            <div className="row d-flex justify-content-center align-items-center card ">
                <div className="col-12">
                { cart.map(item => (
                    
                    <p key={item.id}><b>ID:</b>{` ${item.id} `}<b>Nombre:</b>{` ${item.name} `}
                    <b>Precio:</b>{` $${item.price} `}<b>Cantidad:</b>{` ${item.quantity} `}</p>    
                    
                ))}
                </div>
                <div className="totalPrice col-11 d-flex justify-content-end mr-4"></div>
                    <p><b>Precio Total:</b>{` $${totalPrice} `}</p>
            </div>

        </div>
        )
}
export {Cart}