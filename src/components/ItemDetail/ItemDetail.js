import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = (id, name, price,category, img, stock, description)=>{
    return(
        <>
            <article className='CardItemDetail card col-11 col-md-5 col-lg-3 m-1'>

                <picture>
                    <img src={img} alt={name} className='ItemImg' />
                </picture>
                <section>
                    <p className='info'>
                        Categoría: {category}
                    </p>
                    <p className='info'>
                    Descripción: {description}
                    </p>
                    <p className='info'>
                    Precio: ${price}
                    </p>
                </section>
                <footer className='ItemFooter d-flex justify-content-end align-items-center pb-2'>
                    <div className='itemCount_Container'>
                        <ItemCount
                        stock={10} 
                        initial={1}
                        onAdd={(quantity)=>{ console.log('Cantidad Agregada ', quantity)}}
                        />
                    </div>
                </footer>
            </article>
        </>
     

    )
}

export default ItemDetail