
import { CartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import delete_icon from '../../assets/img/icons/delete.png'
import './Cart.css'
import { useCartContext } from "../../hooks/useCartContext/useCartContext"
import { useEffect, useState } from "react"
import { useProductsContext } from "../../hooks/useProductsContext/useProductsContext"
import { useAuthContext } from "../../hooks/useAuthContext/useAuthContext"
import { useFirebaseClient } from "../../services/hooks/useFirebase/useFirebaseClient"
import { useClientContext } from "../../hooks/useClientContext/useClientContext"
import imgAccount from '../../assets/img/icons/account.png'
import { useOrder } from "../../hooks/useOrder/useOrder"
import { Loading } from "../../components/commons/Loader/Loader"




const Cart = () => {

    const { cart, totalPrice, removeItem, clearCart } = useCartContext(CartContext);
    const { setPageIndex } = useProductsContext();
    const { logged, emailAuth } = useAuthContext();
    const { getClient } = useFirebaseClient();
    const { client } = useClientContext();
    const [dataClientOk, setDataClientOk] = useState(false);
    const navigate = useNavigate()
    const { addNewOrder } = useOrder();
    const [loading, setLoading] = useState(false);


    const handleOrderConfirm = async () => {

        logged && emailAuth !== '' ? (addNewOrder()) : (navigate('/login'));

    }


    useEffect(() => {
        setDataClientOk(false);
        setPageIndex('Cart');
        logged && emailAuth !== '' && getClient('email', emailAuth);
        setLoading(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        logged && emailAuth !== '' && setDataClientOk(true)
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [client])

    useEffect(() => {
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])



    return (
        <>

            <div className="container mt-4 pt-2 card  d-flex justify-content-center">
                <div className="Title container-fluid w-100 m-0 mb-1"><b>Tu Carrito de Compras</b></div>
                {loading && (<>
                    <div className='col-11'>
                        < Loading />
                        <p>cargando...</p>
                    </div>
                </>)}
                {cart.length > 0 ? (<> <div className="container-fluid mainItemsContainer">
                    <div className="row d-flex justify-content-center align-items-center cartRowHeader ">
                        <div className="col-12 col-md-8 cartListHeader"></div>
                        <div className="col-3 col-md-1 cartListHeader p-0 m-0 text-end">Precio</div>
                        <div className="col-3 col-md-1 cartListHeader p-0 m-0 text-center">Cant</div>
                        <div className="col-3 col-md-1 cartListHeader p-0 m-0 text-end">subTotal</div>
                        <div className="col-2 col-md-1"></div>
                    </div>
                    {cart.map(item => (
                        <div key={item.id} className="row cartRowItem d-flex justify-content-evenly align-items-center pt-2">

                            <div className="col-12 col-md-8"><img src={item.img} alt={item.name} style={{ width: 50 }} />{item.name} </div>
                            <div className="col-3 col-md-1 p-0 m-0 text-end">{` $ ${item.price}`}</div>
                            <div className="col-3 col-md-1 text-center">{item.quantity}</div>
                            <div className="col-3 col-md-1 p-0 m-0 text-end">{` $ ${parseFloat(item.price) * parseInt(item.quantity)}`}</div>
                            <div className="col-2 col-md-1 text-end"><img onClick={() => removeItem(item.id)} src={delete_icon} className="img-fluid cartDeleteIcon" alt="icono_borrar" style={{ width: 16 }} data-toggle="tooltip" title="Eliminar Producto" /></div>
                        </div>
                    ))}
                </div>
                    <div className=" col-12 d-flex justify-content-end align-items-center mr-2 pt-4">
                        <div>
                            <p className="totalPrice p-2"><b>Precio Total:</b>{` $${totalPrice} `}</p>
                        </div>
                    </div>
                    <div className="dataClientContainer container-fluid d-flex justify-content-center">
                        {dataClientOk ? (
                            <div className="userContainer text-center w-100">{`Usuario: ${client?.name} - ${client?.email}`}</div>


                        ) : (<div className="userContainer container-fluid text-center w-100">
                            <div className="row d-flex justify-content-center">
                                <div className="col-12 col-md-10">
                                    <p style={{ color: 'tomato' }}>Por Favor, ingrese sus datos para confirmar su compra...</p>
                                </div>
                            </div>


                            <button onClick={handleOrderConfirm} className="Option btnConfirm rounded mb-3 btn">Ingrese sus Datos
                                <img className="ms-2" src={imgAccount} height={22} alt="icono de Usuario" />
                            </button>
                        </div>)}
                    </div>
                    <div className="container d-flex justify-content-center align-items-center">
                        <div>
                            {(cart.length > 0 && dataClientOk) && <button onClick={handleOrderConfirm} className="Option btnConfirm rounded m-4 btn">Confirmar Compra</button>}
                        </div>
                        <div>
                            <Link to='/' className="Option btnContPurchase rounded m-4 btn">Continuar Comprando</Link>
                        </div>
                        <div>
                            <button onClick={() => clearCart()} className="Option btnClearCart rounded m-4 btn">
                                Borrar Carrito <img src={delete_icon} className="img-fluid cartDeleteIcon p-1" alt="icono_borrar carrito" style={{ width: 25 }} data-toggle="tooltip" title="Borrar Carrito" />
                            </button >
                        </div>
                    </div>

                </>) : (<div className="col-12 text-center p-4 mainItemsContainer">

                    <Link to='/' className="Option btnPurchase rounded m-4 btn">Continuar Comprando</Link>
                </div>)}


            </div>
        </>
    )
}
export { Cart }