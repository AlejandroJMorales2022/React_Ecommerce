import { useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/containers/ItemList/ItemList';
import { useFirebase } from '../../services/hooks/useFirebase/useFirebase';
import { useProductsContext } from '../../hooks/useProductsContext/useProductsContext';

const ItemListContainer = ({ greeting1, imgPresentacion }) => {

    const { products, getProducts, errorPromise } = useFirebase();
    const { setPageIndex } = useProductsContext();

    useEffect(() => {

        getProducts();
        setPageIndex('ItemListContainer');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <div className="container-fluid" >
                <section className='row d-flex justify-content-center align-items-center'>
                    <div className='title text-center col-sm-12 col-md-8'>
                        <h1 className='greeting_text1'>{greeting1}</h1>
                    </div>
                    <div className='col-sm-8 col-md-4 d-flex  justify-content-center align-items-center'>
                        <img src={imgPresentacion} className='imgPreserntacion img-fluid' alt='Imagen de Presentacion' />
                    </div>
                </section>

            </div>
            <div className='container-fluid text-center mainContainer'>
                {errorPromise !== '' ? ((<p style={{ color: 'tomato' }}>{errorPromise}</p>)) : (<ItemList products={products} />)}

            </div>
        </>
    )
}

export default ItemListContainer