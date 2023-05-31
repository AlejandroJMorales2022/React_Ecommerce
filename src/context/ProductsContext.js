import { createContext, useState } from "react";

const ProductsContext=createContext({
   
})




const ProductsProvider = ({children}) =>{

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState('')


    const setPageIndex = (pageIndex) =>{
        setPage(pageIndex)
   
        
        return (page)
    }


    return(
        <ProductsContext.Provider value={{products, setProducts,setPageIndex, page}}>
                {children}
        </ProductsContext.Provider>
    )

}

export {ProductsContext, ProductsProvider}