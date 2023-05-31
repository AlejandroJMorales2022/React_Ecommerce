import { useState } from "react"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useProductsContext } from "../../../hooks/useProductsContext/useProductsContext";




const useFirebase = () => {

    const {products, setProducts} = useProductsContext();
    const [urlImage, setUrlImage] = useState('');
   /*  const [products, setProducts] = useState([]); */
    const [productPorId, setProductPorId] = useState({});
    const [urlImg, setUrlImg] = useState('');
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [categories, setCategories] = useState([]);
    const [lastOrder, setLastOrder] = useState(0); //numero de la ultima orden generada
    const [orderId, setOrderId] = useState(''); //id autogernerado en el insert
    const [orderDoc, setOrderDoc] = useState({}); //documento de orden de pedido
    const [errorPromise, setErrorPromise] = useState('')


    const getProducts = () => {

        const db = getFirestore();
        const collectioRef = collection(db, "products");
        getDocs(collectioRef)
            .then((querySnapshot) => {
                if (querySnapshot.size > 0) {
                    const productsColllection = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                    setProducts(productsColllection);
                    setErrorPromise('');
                } else {
                    setErrorPromise('No se han encontrado Productos en la base de datos...');
                }
            })
    };

    //Traer Productos por Categoria
    const getProductsByCategory = async (category) => {
        const db = getFirestore();
        const q = query(collection(db, "products"), where("category", "==", category));

        const snapshot = await getDocs(q);
        if (snapshot.size === 0) {
            setErrorPromise('No se encontraron Productos para la Categoría seleccionada...')
            setProductsByCategory([]);
        } else {
            const productos = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setProductsByCategory(productos);
            setErrorPromise('');

        };
    };

    //Traer Productos por Nombre segun la Barra de busqueda
    const getProductsFromSearchBar = async (searchText) => {
        const db = getFirestore();
        const q = query(collection(db, "products"), where("name", "in", searchText));

        const snapshot = await getDocs(q);
        if (snapshot.size === 0) {
            setErrorPromise('No se encontraron Productos con el nombre solicitado')
            setProductsByCategory([]);
        } else {
            const productos = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            console.log ("Productirijillos: "+ products)
            setProducts(productos);
            setErrorPromise('');

        };
    };


    //Traer de la collection Products el que coincida con el Id del Item seleccionado
    const getProductPorId = async (id) => {

        const db = getFirestore();
        const qref = doc(db, 'products', id);
        const result = await getDoc(qref);
        if (result.size === 0) {
            setErrorPromise("No se encontro el Producto seleccionado...");
        } else {
            (setProductPorId({ ...result.data(), id: id }));
            setUrlImg(result.data().img);
            setErrorPromise('');
        }
    }

    //Traer Categorias
    const getCategories = () => {
        const db = getFirestore();
        const collectioRef = collection(db, "categories");
        getDocs(collectioRef).then((querySnapshot) => {
            if (querySnapshot.size > 0) {
                const categoriesColllection = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setCategories(categoriesColllection);
                setErrorPromise('');
            } else {
                setErrorPromise('No se encontraron Categorías en la base de datos...')
            }

        });

    }

    //Traer url de la imagen del producto
    const getUrl = async (img) => {
        const storage = getStorage();
        await getDownloadURL(ref(storage, img))
            .then((url) => {
                if (url) {
                    setUrlImage(url);
                    setErrorPromise('');
                } else {
                    setErrorPromise('No se encontro la URL de la Imagen solicitada...')
                }

            })
    }

    const setOrderDocument = async (order) => {

        if (order.items.length > 0 && order.total > 0) {
            const db = getFirestore();
            const ordersColllection = collection(db, 'orders');
            await addDoc(ordersColllection, order)
                .then(({ id }) => {
                    if (id) {
                        setOrderId(id);
                        setErrorPromise('');
                    } else {
                        setErrorPromise('No se pudo Guardar la orden de Pedido en la base de datos...')
                    }

                })
        }

    }

    const getLastOrder = () => {
        let a = 0;
        //Traer orders collection, ordenar y buscar la ultima para devolver el order number
        const db = getFirestore();
        const collectioRef = collection(db, "orders");
        getDocs(collectioRef).then((querySnapshot) => {
            if (querySnapshot.size > 0) {
                const ordersColllection = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                ordersColllection.forEach(order => {
                    if (order.order_number > a) { a = order.order_number }
                })
                setLastOrder(a);
                setErrorPromise('');
            } else {
                setErrorPromise('No se encontraron Ordenes de Pedido...');
            }

        })
    }

    const getOrderDocument = async (order_number) => {
        const db = getFirestore();
        const q = query(collection(db, "orders"), where("order_number", "==", order_number));

        const snapshot = await getDocs(q);
        if (snapshot.size === 0) {
            setErrorPromise('No se encontró la Orden de Pedido...');
            setOrderDoc({});
        } else {
            const orders = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            orders.length === 1 &&
                setOrderDoc(orders[0]);
            setErrorPromise('');
        };

    }


    return {
        urlImage, getUrl, products, getProducts, productPorId,
        getProductPorId, urlImg, getProductsByCategory,
        productsByCategory, setOrderDocument,
        categories, getCategories, lastOrder, getLastOrder, orderId,
        setOrderId, orderDoc, getOrderDocument, errorPromise,getProductsFromSearchBar
    }
}
export { useFirebase }