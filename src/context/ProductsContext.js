import { createContext, useState } from "react";

const ProductsContext=createContext({
   
})




const ProductsProvider = ({children}) =>{

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState('')
    const [errorPromise, setErrorPromise] = useState('')

    const setPageIndex = (pageIndex) =>{
        setPage(pageIndex)
     
        return (page)
    }


    return(
        <ProductsContext.Provider value={{products, setProducts,setPageIndex, page,errorPromise, setErrorPromise}}>
                {children}
        </ProductsContext.Provider>
    )

}

export {ProductsContext, ProductsProvider}