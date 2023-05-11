import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = (product)=>{
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
                    <b>Descripción:</b> {product.description}
                    </p>
                    <p className='info'>
                    <b>Precio</b>: ${product.price}
                    </p>
                </section>
                <footer className='ItemFooter d-flex justify-content-center align-items-center pb-2'>
                    <div className='itemCount_Container'>
                        <ItemCount
                        stock={10} 
                        initial={1}
                        onAdd={(quantity)=>{ console.log('Cantidad Agregada ', quantity)}}
                        />
                    </div>
                </footer>
            </article>

    )
}

export default ItemDetail