import { createContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {getStorage,getDownloadURL,ref} from "firebase/storage"
import { useFirebase } from "../hooks/useFirebase/useFirebase";

const ProductsContext=createContext({
    
})


const ProductsProvider = ({children}) =>{
   
    
    const {products, getProducts} = useFirebase()
   
    useEffect(()=>{
        getProducts('todos')
    },[])

    
 
    return(
        <ProductsContext.Provider value={{products}}>
                {children}
        </ProductsContext.Provider>
    )
}
export {ProductsContext, ProductsProvider}