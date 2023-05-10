import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



const CategoriesContainer = () => {
    
    const [product, setProduct] = useState(null)
    const { category } = useParams()

    

    useEffect(()=>{
        getProductsById(parseInt(category))
            .then(response => {
                setProduct(response)
            })
            .catch(error=>{
                console.error(+error)
            })
    },[category]);
    
    return (
            <div className="ItemDetailContainer container-fluid d-flex justify-content-center align-items-center">
                    <ItemDetail {...product} />  
            </div>
    )
}

export default CategoriesContainer