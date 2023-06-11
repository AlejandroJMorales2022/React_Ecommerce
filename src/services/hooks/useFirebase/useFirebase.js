import { useState } from "react"
import { addDoc, collection, doc, getDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useProductsContext } from "../../../hooks/useProductsContext/useProductsContext";
import { db, storage } from "../../firebase/firebaseConfig";




const useFirebase = () => {

    const { products, setProducts, errorPromise, setErrorPromise } = useProductsContext();
    const [urlImage, setUrlImage] = useState('');
    const [productPorId, setProductPorId] = useState({});
    const [urlImg, setUrlImg] = useState('');
    const [categories, setCategories] = useState([]);
    const [lastOrder, setLastOrder] = useState(0); //numero de la ultima orden generada
    const [orderId, setOrderId] = useState(''); //id autogernerado en el insert
    const [orderDoc, setOrderDoc] = useState({}); //documento de orden de pedido
    const [ordersUser, setOrdersUser] = useState([]);



    const getProducts = async () => {

        const collectionRef = collection(db, "products");
        const q = query(collectionRef, orderBy("name", "desc"), limit(20));
        try {
            const querySnapshot = await getDocs(q)
            if (querySnapshot.size > 0) {
                const productsColllection = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setProducts(productsColllection);
                setErrorPromise('');
            }
        } catch (err) {
            setErrorPromise('Error: No se han encontrado Productos en la base de datos...');
        }
    };

    //Traer Productos por Categoria
    const getProductsByCategory = async (category) => {

        const qref = query(collection(db, "products"));
        const q = query(qref, where("category", "==", category), orderBy("name", "desc"));
        try {
            const snapshot = await getDocs(q);
            const productos = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setProducts(productos);
            productos.length > 0 ? setErrorPromise('') : setErrorPromise('No se encontraron Productos para la Categoría seleccionada...');
        } catch (err) {
            setErrorPromise('Error: No se encontraron Productos para la Categoría seleccionada...');
            setProducts([]);
        }
    };


    //Traer de la collection Products el que coincida con el Id del Item seleccionado
    const getProductPorId = async (id) => {
        const qref = doc(db, 'products', id);
        try {
            const result = await getDoc(qref);
            (setProductPorId({ ...result.data(), id: id }));
            if (result.exists) {
                setUrlImg(result.data().img)
                setErrorPromise('')
            } else { setErrorPromise("No se encontro el Producto seleccionado..."); }
        } catch (err) {
            setErrorPromise("Error: no se pudo concretar la búsqueda del Producto seleccionado...");
        }
    }

    //Traer Categorias
    const getCategories = async () => {

        const collectioRef = collection(db, "categories");
        try {
            const querySnapshot = await getDocs(collectioRef)
            if (querySnapshot.size > 0) {
                const categoriesColllection = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setCategories(categoriesColllection);
                setErrorPromise('');
            } else { setErrorPromise('No se encontraron Categorías en la base de datos...'); }
        } catch (err) {
            setErrorPromise('Error: No se pudo concretar la busqueda de Categorías en la base de datos');
        }
    }


    //Traer url de la imagen del producto
    const getUrl = async (img) => {
        try {
            const url = await getDownloadURL(ref(storage, img));
            setUrlImage(url);
            setErrorPromise('');
        } catch (err) {
            setErrorPromise('No se encontro la URL de la Imagen solicitada...');
        }
    }

    const setOrderDocument = async (order) => {
        if (order.items.length > 0 && order.total > 0) {
            const ordersColllection = collection(db, 'orders');
            try {
                const { id } = await addDoc(ordersColllection, order);
                setErrorPromise('');
                return { success: true, id };
            } catch (err) {
                console.error('Error al guardar la Orden en la base de datos', err);
                setErrorPromise('Error: No se pudo Guardar la orden de Pedido en la base de datos');
                return { success: false, error: err }
            }
        }
    }

    const getLastOrder = async () => {
        let a = 0;
        //Traer orders collection, ordenar y buscar la ultima para devolver el order number
        const collectioRef = collection(db, "orders");
        try {
            const querySnapshot = await getDocs(collectioRef);
            if (querySnapshot.size > 0) {
                const ordersColllection = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                ordersColllection.forEach(order => {
                    if (order.order_number > a) { a = order.order_number }
                })
                setLastOrder(a);
                setErrorPromise('');
            } else {
                setErrorPromise('No se encontraron Ordenes de Pedido...');
                setLastOrder(0);
            }
        } catch (err) {
            setErrorPromise('Error: No se pudo concretar la búsqueda de Ordenes de Pedido en la base de datos');
            setLastOrder(0);
        }
    }

    const getOrderDocument = async (order_number) => {

        const q = query(collection(db, "orders"), where("order_number", "==", order_number));
        try {
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
        } catch (err) {
            setErrorPromise('Error: No se pudo concretar la busqueda de la Orden de Pedido en la base de datos');
            setOrderDoc({});
        }
    }

    const getOrdersUser = async (user) => {

        const q = query(collection(db, "orders"), where("buyer.email", "==", user), orderBy("date", "desc"), orderBy("order_number", "desc"));
        try {
            const snapshot = await getDocs(q);
            if (snapshot.size === 0) {
                setErrorPromise('No se encontraron compras para este Usuario...');
                setOrdersUser([]);
            } else {
                const orders = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setOrdersUser(orders);
                setErrorPromise('');
            };
        } catch (err) {
            setErrorPromise('Error: No se pudo concretar la búsqueda de compras para este Usuario en la base de datos.');
            setOrdersUser([]);
        }

    }

    return {
        urlImage, getUrl, products, setProducts, getProducts, productPorId,
        getProductPorId, urlImg, getProductsByCategory, setOrderDocument,
        categories, getCategories, lastOrder, getLastOrder, orderId,
        setOrderId, orderDoc, getOrderDocument, errorPromise, setErrorPromise,
        ordersUser, getOrdersUser
    }
}
export { useFirebase }