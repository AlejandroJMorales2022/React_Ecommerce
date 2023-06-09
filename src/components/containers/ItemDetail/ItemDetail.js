import { useEffect, useState } from "react"
import ItemCount from "../../basics/ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../../hooks/useAuthContext/useAuthContext"
import { useCartContext } from "../../../hooks/useCartContext/useCartContext"





const ItemDetail = (product)=>{


    const [quantityAdded, setQuantityAdded] = useState(0);
    const {addItem, cart,cartLS, setCartLS} = useCartContext();
    const {emailAuth}= useAuthContext();
  
    const handleOnAdd = (quantity)=> {
        setQuantityAdded(quantity);
        const item = { id: product.id, name: product.name, price: product.price, img: product.img};
        addItem(item, quantity);  
    }

    useEffect(()=>{
        setCartLS(cart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cart])

    useEffect(()=>{
        emailAuth && localStorage.setItem('Cart_Lepen_'+emailAuth,JSON.stringify(cartLS));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cartLS])



    return(
            <article className='CardItemDetail card col-11 col-md-6 m-1 text-center mt-4 pt-4'>
                <header className='Hader pt-2'>
                    <h2 className='ItemHeader'>
                        {product.name}
                    </h2>
                </header>
                <picture>
                    <img src={product.img} alt={product.name} className='ItemImg rounded' />
                </picture>
                <section>
                    <p className='info'>
                        <b>Categoría:</b> {product.category}
                    </p>
                    <p className='info text-start p-2'>
                    <b>Descripción:</b> {product.description} <b>Stock Disponible: </b> {product.stock} unidades
                    </p>
                    <p className='info'>
                    <b>Precio</b>: ${product.price}
                    </p>
                </section>
                <footer className='ItemFooter d-flex justify-content-center align-items-center pb-2'>
                    <div className='itemCount_Container'>
                        {
                            quantityAdded > 0 ? (
                                <>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Link to='/cart' className="Option btnPurchase rounded m-4 btn">ir al Carrito</Link>
                                    <Link to='/' className="Option btnContPurchase rounded m-4 btn">Seguir Comprando</Link>
                                </div>
                                
                                </> 
                                ) : (<ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd}
                        />)
                        }
                        
                    </div>
                </footer>
                
            </article>

    )
}

export default ItemDetail