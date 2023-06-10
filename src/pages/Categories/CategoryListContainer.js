import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './CategoryListContainer.css'
import { useFirebase } from "../../services/hooks/useFirebase/useFirebase";
import { CategoryList } from "../../components/containers/CategoryList/CategoryList";
import { useProductsContext } from "../../hooks/useProductsContext/useProductsContext";
import { Loading } from "../../components/commons/Loader/Loader";





const CategoryListContainer = () => {

    const { category } = useParams();
    const { getProductsByCategory, errorPromise } = useFirebase();
    const { setPageIndex, products } = useProductsContext();
    const [loading, setLoading]= useState(false);


    useEffect(() => {
        getProductsByCategory(category);
        setLoading(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    useEffect(()=>{
        products && setLoading(false);
    },[products])

    useEffect(() => {
        setPageIndex('CategoryListContainer');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {loading && (<>
                <div className='container d-flex flex-column justify-content-center align-items-center ps-5 pt-4'>
                    < Loading />
                    <p>cargando...</p>
                </div>
            </>)}
            <div className="container-fluid text-center mainContainer">
                {errorPromise === '' ? <CategoryList products={products} category={category} /> : <div className="pt-5"><p style={{ color: 'tomato' }}>{errorPromise}</p></div>}
            </div>

        </>

    )
}

export default CategoryListContainer