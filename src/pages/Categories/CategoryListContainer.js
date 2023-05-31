import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../../services/hooks/useFirebase/useFirebase";
import { CategoryList } from "../../components/containers/CategoryList/CategoryList";





const CategoryListContainer = () => {
    
    const { category } = useParams()
    const {productsByCategory, getProductsByCategory,errorPromise} = useFirebase();
   

    useEffect(()=>{
         getProductsByCategory(category)
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[category]); 

    return (
        
             <div className="container-fluid text-center">    
                {errorPromise==='' ? <CategoryList  products={productsByCategory} category={category} /> : <p style={{color:'tomato'}}>{errorPromise}</p>}         
            </div>
            
    )
}

export default CategoryListContainer