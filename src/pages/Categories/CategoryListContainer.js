import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './CategoryListContainer.css'
import { useFirebase } from "../../services/hooks/useFirebase/useFirebase";
import { CategoryList } from "../../components/containers/CategoryList/CategoryList";
import { useProductsContext } from "../../hooks/useProductsContext/useProductsContext";





const CategoryListContainer = () => {
    
    const { category } = useParams();
    const {getProductsByCategory,errorPromise} = useFirebase();
    const {setPageIndex, products} = useProductsContext();
   

    useEffect(()=>{
         getProductsByCategory(category);
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[category]); 

     useEffect(()=>{
        setPageIndex('CategoryListContainer');
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])

    return (
        
             <div className="container-fluid text-center mainContainer">    
                {errorPromise==='' ? <CategoryList  products={products} category={category} /> : <p style={{color:'tomato'}}>{errorPromise}</p>}         
            </div>
            
    )
}

export default CategoryListContainer