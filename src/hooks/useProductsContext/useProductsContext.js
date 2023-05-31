import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";



const useProductsContext = () => {
    const productsContext = useContext(ProductsContext)

    return (productsContext)
} 
export {useProductsContext}