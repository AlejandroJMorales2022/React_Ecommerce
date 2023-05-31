import { useEffect } from "react"
import { useFirebase } from "../../../services/hooks/useFirebase/useFirebase"

const SearchBar = () => {

    const {getProductsFromSearchBar, getProducts, products} = useFirebase()

    const handleOnChange = (e) => {
        //al escribir en inputSearch, traer productos filtrador por nombre
        if(e.target.value === ''){
            getProducts() 
        }else{
            getProductsFromSearchBar(e.target.value)
        }
        
    }
useEffect(()=>{
    console.log(products)
},[products])


    return (
        <form >
            <input className='inputSearch w-100 rounded mt-1 p-1 text-center' onChange={handleOnChange} type="text" name="search" id="search" placeholder='Buscar producto...' />
        </form>
    )
}
export { SearchBar }