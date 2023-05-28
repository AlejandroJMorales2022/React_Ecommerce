import { useState } from "react"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";




const useFirebase = () => {

    const [urlImage, setUrlImage] = useState('');
    const [products, setProducts] = useState([]);
    const [productPorId, setProductPorId] = useState({});
    const [urlImg, setUrlImg] = useState('');
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [categories, setCategories] = useState([]);
    const [lastOrder, setLastOrder] = useState(0);
    const [orderId, setOrderId] = useState('');


    const getProducts = () => {
        const db = getFirestore();
        const collectioRef = collection(db, "products");
        getDocs(collectioRef).then((querySnapshot) => {
            const productsColllection = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setProducts(productsColllection);
        });
    };

    //Traer Productos por Categoria
    const getProductsByCategory = async (category) => {
        const db = getFirestore();
        const q = query(collection(db, "products"), where("category", "==", category));

        const snapshot = await getDocs(q);
        if (snapshot.size === 0) {
            console.log('Consulta sin resultados');
            setProductsByCategory([]);
        } else {
            const productos = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setProductsByCategory(productos);

        };
    };


    //Traer de la collection Products el que coincida con el Id del Item seleccionado
    const getProductPorId = async (id) => {

        const db = getFirestore();
        const qref = doc(db, 'products', id);
        const result = await getDoc(qref);
        if (result) {
            (setProductPorId({ ...result.data(), id: id }));
            setUrlImg(result.data().img);
        } else {
            console.log("Error: No se encontro el producto seleccionado");
        }
    }

    //Traer Categorias
    const getCategories = () => {
        const db = getFirestore();
        const collectioRef = collection(db, "categories");
        getDocs(collectioRef).then((querySnapshot) => {
            const categoriesColllection = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setCategories(categoriesColllection);
        });

    }

    //Traer url de la imagen del producto
    const getUrl = async (img) => {
        const storage = getStorage();
        await getDownloadURL(ref(storage, img))
            .then((url) => {
                setUrlImage(url)
            })
    }

    const setOrderDocument = async (order) => {
        /* console.log("detalle de Orden Generada " + order.buyer.name + "  " + order.buyer.phone + "  " + order.buyer.email);
        console.log("Items Comprados " + order.items.length)
        console.log("Detalle de Compra")
        for (let i = 0; i <= order.items.length - 1; i++) {
            console.log(order.items[i].name + " " + order.items[i].price)
        } */

        if (order.items.length > 0 && order.total > 0) {
            const db = getFirestore();
            const ordersColllection = collection(db, 'orders');
            await addDoc(ordersColllection, order)
                .then(({ id }) => {
                    setOrderId(id)
                    console.log("el id de la nueva orden es " + id)
                })
        }
        
    }

    const getLastOrder = () => {
        let a=0;
        //Traer orders collection, ordenar y buscar la ultima para devolver el order number
        const db = getFirestore();
        const collectioRef = collection(db, "orders");
        getDocs(collectioRef).then((querySnapshot) => {
            const ordersColllection = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
           ordersColllection.forEach(order=>{
                if( order.order_number > a){ a=order.order_number }
           })  
           setLastOrder(a)   
        })
    }

    return {
        urlImage, getUrl, products, getProducts, productPorId,
        getProductPorId, urlImg, getProductsByCategory,
        productsByCategory, setOrderDocument,
        categories, getCategories, lastOrder, getLastOrder, orderId, setOrderId
    }
}
export { useFirebase }