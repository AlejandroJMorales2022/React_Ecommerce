import { useEffect, useState } from "react";
/* import { getProductsByCategory} from "../../asyncMock_noseusa"; */
import { useParams } from "react-router-dom";
import { CategoryList } from "../CategoryList/CategoryList";
import { useFirebase } from "../../hooks/useFirebase/useFirebase";




const CategoryListContainer = () => {
    
    /* const [products, setProduct] = useState([]) */
    const { category } = useParams()

    const {productsByCategory, getProductsByCategory} = useFirebase();
   

    useEffect(()=>{
         getProductsByCategory(category)
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[category]); 


    /* useEffect(()=>{
        getProductsByCategory(category)
            .then(response => {
                setProduct(response)
            })
            .catch(error=>{
                console.error(+error)
            })
    },[category]); */
    console.log("productos enviados a CategoryList "+ productsByCategory)
    return (
        
             <div className="container-fluid">    
            
                    <CategoryList  products={productsByCategory} category={category} />
            </div>
            
    )
}

export default CategoryListContainer