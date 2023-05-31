import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import delete_icon from '../../assets/img/icons/delete.png'
import './Cart.css'
import { FormClient } from "../../components/forms/FormClient"





const Cart = ()=>{

    const {cart, totalPrice, removeItem} = useContext(CartContext)
    
     
    return(
        <>
        <div className="container mt-4 pt-2 card">

            {cart.length>0 ? (<> <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center cartRowHeader">
                    <div className="col-8 cartListHeader">Producto</div>
                    <div className="col-1 cartListHeader p-0 m-0 text-end">Precio</div>
                    <div className="col-1 cartListHeader p-0 m-0 text-center">Cant</div>
                    <div className="col-1 cartListHeader p-0 m-0 text-end">subTotal</div>
                    <div className="col-1"></div>
                </div>
                { cart.map(item => (
                    <div  key={item.id} className="row cartRowItem d-flex justify-content-evenly align-items-center pt-2">
                        
                        <div className="col-8"><img  src={item.img} alt={item.name} style={{width:50}} />{item.name} </div>
                        <div className="col-1 p-0 m-0 text-end">{` $ ${item.price}`}</div>
                        <div className="col-1 text-center">{item.quantity}</div>
                        <div className="col-1 p-0 m-0 text-end">{` $ ${parseFloat(item.price)*parseInt(item.quantity)}`}</div>
                        <div className="col-1 text-end"><img onClick={()=>removeItem(item.id)} src={delete_icon} className="img-fluid cartDeleteIcon" alt="icono_borrar" style={{width:16}} data-toggle="tooltip" title="Eliminar roducto"/></div>
                    </div>
                ))} 
                </div>
                <div className=" col-12 d-flex justify-content-end mr-2 pt-4">
                    <p className="totalPrice p-2"><b>Precio Total:</b>{` $${totalPrice} `}</p>
                </div></>) :(<div className="col-12 text-center p-4">
                            
                            <Link to='/' className="Option btnPurchase rounded m-4 btn">Continuar Comprando</Link>
                          </div>)}
                

        </div>
        <div className="FormClientContainer container mt-5 mb-5 pt-2 card text-center">
                   {cart.length>0 ? (<FormClient />) : (<p style={{color:'tomato'}}>No agregaste productos a tu Orden, por el momento...</p>) }  
        </div>
        </>
        )
}
export {Cart}