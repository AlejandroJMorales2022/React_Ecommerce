import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useFirebase } from "../../hooks/useFirebase/useFirebase";



const ItemDetailContainer = () => {
    
   /*  const [product, setProduct] = useState(null) */
    const { idProduct } = useParams()


    const {productPorId, getProductPorId, urlImg} = useFirebase();
   

    useEffect(()=>{
        getProductPorId(idProduct)
        /* console.log(urlImg) */
        // eslint-disable-next-line react-hooks/exhaustive-deps
     },[idProduct]); 


    
    return (
            <div className="ItemDetailContainer container-fluid d-flex justify-content-center align-items-center">
                    {/* <ItemDetail {...product} />  */} 
                    <ItemDetail {...productPorId} /> 
            </div>
    )
}

export default ItemDetailContainer