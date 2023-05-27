import { useContext, useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useFirebase } from "../../hooks/useFirebase/useFirebase"
import { FormClient } from "../Forms/FormClient"


const ItemDetail = (product)=>{


    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(CartContext)
    const {urlImage, getUrl, imagen} = useFirebase()
    
    /* useEffect(()=>{
        getUrl(product.img)
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[]) 
 */
    const handleOnAdd = (quantity)=> {
        setQuantityAdded(quantity)
        const item = { id: product.id, name: product.name, price: product.price, img: product.img}
        addItem(item, quantity)
    }

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
                                    <Link to='/cart' className="Option btnPurchase rounded m-4 btn">Terminar Compra</Link>
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