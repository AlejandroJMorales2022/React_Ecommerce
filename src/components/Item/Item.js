import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item = ({id, name, img, price, stock}) =>{
    return (
        <article className='CardItem card col-11 col-md-5 col-lg-3 m-1'>
            <header className='Hader pt-2'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='info'>
                    Stock Didsponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter row d-flex justify-content-center align-items-center pb-2'>
                <div className='BtnContainer col-6'>
                    <button className='Option btnVerDetalle btn btn-secondary'>Ver Detalle</button>
                </div>
                {/* <div className='itemCount_Container col-6'>
                    <ItemCount
                    stock={10} 
                    initial={1}
                    onAdd={(quantity)=>{ console.log('Cantidad Agregada ', quantity)}}
                    />
                </div> */}
            </footer>
        </article>

    )
}

export default Item