import { useFirebase } from "../../hooks/useFirebase/useFirebase"
import Item from "../Item/Item"
import './CategoryList.css'

const CategoryList = ({products, category}) =>{

   /*  const {productsByCategory} = useFirebase(); */
 /* alert(products.length) */
    return (
        <>
        <div className="container-fluid d-flex justify-content-center">
            <div className="Title container-fluid"><b>{category}</b></div>
        </div>    
            <div className="row d-flex justify-content-center">
                { (products.map (prod => <Item key={prod.id}{...prod} />))}  
            </div>
       
        
    </>
    
    )
}
export {CategoryList}