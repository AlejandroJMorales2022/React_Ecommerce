import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncMock_noseusa";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useFirebase } from "../../hooks/useFirebase/useFirebase";



const ItemDetailContainer = () => {
    
   /*  const [product, setProduct] = useState(null) */
    const { idProduct } = useParams()

    //Hay que ir a buscar el Producto segun si Id
    const {productPorId, getProductPorId} = useFirebase();
   

    useEffect(()=>{
         getProductPorId(idProduct)
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[]); 

    //******************************************* */

    /* useEffect(()=>{
        getProductsById(parseInt(idProduct))
            .then(response => {
                setProduct(response)
            })
            .catch(error=>{
                console.error(+error)
            })
    },[idProduct]); */
    
    return (
            <div className="ItemDetailContainer container-fluid d-flex justify-content-center align-items-center">
                    {/* <ItemDetail {...product} />  */} 
                    <ItemDetail {...productPorId} /> 
            </div>
    )
}

export default ItemDetailContainer