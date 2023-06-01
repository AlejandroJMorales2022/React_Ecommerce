import { useEffect, useState } from "react"
import { useFirebase } from "../../../services/hooks/useFirebase/useFirebase"
import { useProductsContext } from "../../../hooks/useProductsContext/useProductsContext";

const SearchBar = () => {

    const { getProducts, products, setProducts } = useFirebase();
    const [localProducts, setLocalProducts] = useState([]);
    const { page } = useProductsContext();
    /* const [backupProducts, setBackupProducts] = useState([]) */
    const [backup, setBackup] = useState(0)

    const handleOnChange = (e) => {
        /* console.log(localProducts)
        console.log(backupProducts) */
        /* setLocalProducts(backupProducts); */

        //al escribir en inputSearch, traer productos filtrador por nombre
        let prodRes = [];
        if (e.target.value === '') {
            getProducts();
        } else {
            prodRes = localProducts.filter(prod => ((prod.name).toLowerCase().includes(e.target.value)));
            setProducts(prodRes);
        }

    }

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (backup === 0) {
            if (products) {
                setLocalProducts(products)
                /* setBackupProducts(products) */
                setBackup(1)
            }


        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products])


    return (
        <div>
            {page === 'ItemListContainer' &&
                <form >
                    <input className='inputSearch w-100 rounded mt-1 p-1 text-center' onChange={handleOnChange} type="text" name="search" id="search" placeholder='Buscar producto...' />
                </form>
            }

        </div>

    )
}
export { SearchBar }