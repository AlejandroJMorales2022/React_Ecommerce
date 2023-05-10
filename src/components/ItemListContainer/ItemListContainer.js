import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncMock';

const ItemListContainer = ({greeting1, imgPresentacion}) => {
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error=>{
                console.error(error)
            })
    },[]);
    
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center ">
                <div className='title text-center'>
                    <h1 className='greeting_text1'>{greeting1}</h1>
                </div>
                <div>
                    <img src={imgPresentacion} className='imgPreserntacion img-fluid' alt='Imagen de Presentacion' />
                </div>
            </div>
            <div className='container-fluid'>
                <ItemList products={products} />  
            </div>
        </>
    )
}

export default ItemListContainer