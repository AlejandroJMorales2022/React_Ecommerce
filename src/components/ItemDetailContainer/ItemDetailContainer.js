import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        getProductsById(1)
            .then(response => {
                setProduct(response)
                
                console.log('RESPUESTA '+ response)
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