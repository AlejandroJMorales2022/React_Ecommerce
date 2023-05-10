import { useEffect, useState } from "react";
import { getProductsByCategory} from "../../asyncMock";
import { useParams } from "react-router-dom";
import { CategoryList } from "../CategoryList/CategoryList";




const CategoryListContainer = () => {
    
    const [products, setProduct] = useState([])
    const { category } = useParams()

    

    useEffect(()=>{
        getProductsByCategory(category)
            .then(response => {
                setProduct(response)
            })
            .catch(error=>{
                console.error(+error)
            })
    },[category]);
    
    return (
        
             <div className="container-fluid">    
            
                    <CategoryList  products={products} category={category} />
            </div>
            
    )
}

export default CategoryListContainer