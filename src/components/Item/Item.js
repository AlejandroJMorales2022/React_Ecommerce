import { Link } from 'react-router-dom';
import './Item.css';



const Item = ({id, name, img, price, stock}) =>{


    return (
        <article className='CardItem card col-11 col-md-5 col-lg-3 m-1 text-center'>
            <header className='Hader pt-2'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg rounded' />
            </picture>
            <section>
                <p className='Info p-0 m-0'>
                    Precio: ${price}
                </p>
                <p className='info p-0 m-0'>
                    Stock Didsponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter row d-flex justify-content-center align-items-center pb-2'>
                <div className='BtnContainer col-6 mt-2'>
                <Link to={`/components/ItemDetailContainer/${id}`} className='Option btnVerDetalle btn btn-secondary' >Ver Detalle</Link>
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