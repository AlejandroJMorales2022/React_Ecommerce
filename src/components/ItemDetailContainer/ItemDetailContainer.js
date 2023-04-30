import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({id:1,name:'pepe'})

    useEffect(()=>{
        getProductsById('1')
            .then(response => {
                setProduct(response)
            })
            .catch(error=>{
                console.error(+error)
            })
    },[]);
    
    return (
            <div className="ItemDetailContainer container-fluid d-flex justify-content-center align-items-center">
                    <ItemDetail {...product} />  
            </div>
    )
}

export default ItemDetailContainer