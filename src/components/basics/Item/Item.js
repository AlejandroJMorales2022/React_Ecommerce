import { Link } from 'react-router-dom';
import './Item.css';
import { useFirebase } from '../../../services/hooks/useFirebase/useFirebase';
import { useEffect } from 'react';



const Item = ({id, name, img, price, stock}) =>{

    const {urlImage, getUrl}= useFirebase();

    useEffect(()=>{
        getUrl(img);
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
    

    return (
        <article className='CardItem card col-11 col-sm-5 col-lg-3 m-1 text-center'>
            <header className='Hader pt-2'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={urlImage} alt={name} className='ItemImg rounded' />
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
                <Link to={`/item/${id}`} className='Option btnVerDetalle btn btn-secondary' >Ver Detalle</Link>
                </div>
            </footer>
        </article>

    )
}

export default Item