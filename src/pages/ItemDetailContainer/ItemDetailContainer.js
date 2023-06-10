import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/containers/ItemDetail/ItemDetail";
import { useFirebase } from "../../services/hooks/useFirebase/useFirebase";
import { useProductsContext } from "../../hooks/useProductsContext/useProductsContext";
import { Loading } from "../../components/commons/Loader/Loader";



const ItemDetailContainer = () => {

        const { idProduct } = useParams();
        const { productPorId, getProductPorId, errorPromise } = useFirebase();
        const { setPageIndex } = useProductsContext();
        const [loading, setLoading] = useState(false);


        useEffect(() => {
                getProductPorId(idProduct);
                setLoading(true);
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [idProduct]);

        useEffect(() => {
                setPageIndex('ItemDetailContainer');
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        useEffect(()=>{
                productPorId !== {} && setLoading(false);
        },[productPorId])

        return (
                <>
                        {loading && (<>
                                <div className='container d-flex flex-column justify-content-center align-items-center pt-3'>
                                        < Loading />
                                        <p>cargando...</p>
                                </div>
                        </>)}
                        <div className="ItemDetailContainer container-fluid d-flex justify-content-center align-items-center text-center">
                                {errorPromise === '' ? <ItemDetail {...productPorId} /> :  <div className="pt-5"><p style={{ color: 'tomato' }}>{errorPromise}</p></div>}

                        </div>
                </>

        )
}

export default ItemDetailContainer