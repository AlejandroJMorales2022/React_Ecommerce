import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = ({id}) => {
    
    const [product, setProduct] = useState(null)

    

    useEffect(()=>{
        getProductsById(id)
            .then(response => {
                setProduct(response)
                
                console.log('RESPUESTA '+ response)
            })
            .catch(error=>{
                console.error(+error)
            })
    },[id]);
    
    return (
            <div className="ItemDetailContainer container-fluid d-flex justify-content-center align-items-center">
                    <ItemDetail {...product} />  
            </div>
    )
}

export default ItemDetailContainer