import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asymcMock';

const ItemListContainer = ({greeting1, greeting2, imgPresentacion}) => {
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
            .then(response => {
                console.log(response)
                setProducts(response)
            })
            .catch(error=>{
                console.error(error)
            })
    },[]);
    
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h1 className='greeting_text1'>{greeting1}</h1>
            <div>
                <img src={imgPresentacion} className='imgPreserntacion' alt='Imagen de Presentacion' />
            </div>
            <h4 className='greeting_text2'>{greeting2}</h4>
        
            <ItemList products={products} />  
        </div>
    )
}

export default ItemListContainer