import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import delete_icon from '../assets/img/icons/delete.png'
import './Cart.css'





const Cart = ()=>{

    const {cart, totalPrice, removeItem} = useContext(CartContext)
    
    
    
    return(
        <div className="container mt-4 pt-2 card">

            {cart.length>0 ? (<> <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center cartRowHeader">
                    <div className="col-8 cartListHeader">PRODUCTO</div><div className="col-2 cartListHeader p-0 m-0 text-end">PRECIO</div><div className="col-1 cartListHeader p-0 m-0 text-center">CANT</div><div className="col-1"></div>
                </div>
                { cart.map(item => (
                    <div  className="row cartRowItem d-flex justify-content-evenly align-items-center pt-2">
                        
                        <div key={item.id} className="col-8"><img  src={`'${item.img}'`} alt={item.name}/>{item.name} </div><div className="col-2 p-0 m-0 text-end">{` $ ${parseFloat(item.price)*parseInt(item.quantity)}`}</div><div className="col-1 text-center">{item.quantity}</div><div className="col-1 text-end"><img onClick={()=>removeItem(item.id)} src={delete_icon} className="img-fluid cartDeleteIcon" alt="icono_borrar" style={{width:16}} data-toggle="tooltip" title="Eliminar roducto"/></div>
                    </div>
                ))} 
                </div>
                <div className=" col-12 d-flex justify-content-end mr-2 pt-4">
                    <p className="totalPrice p-2"><b>Precio Total:</b>{` $${totalPrice} `}</p>
                </div></>) :(<div className="col-10 text-center p-4">
                            <p>No hay productos en el Carrito de Compras, por el momento...</p>
                            <Link to='/' className="Option btnPurchase rounded m-4 btn">Continuar Comprando</Link>
                          </div>)}
                

        </div>
        )
}
export {Cart}