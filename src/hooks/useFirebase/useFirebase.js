import { useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";




const useFirebase = ()=>{

    const [urlImage, setUrlImage] =useState('');
    const [products, setProducts] = useState([])
    const [productPorId, setProductPorId] = useState({})
    const [urlImg, setUrlImg] = useState('')
    const [productsByCategory, setProductsByCategory] =useState([])
    
    
    const getProducts = () =>{
        const db=getFirestore();
        const collectioRef = collection(db,"products");
        getDocs(collectioRef).then((querySnapshot) => {
            const productsColllection=querySnapshot.docs.map((doc)=>({...doc.data(), id: doc.id}));
            setProducts(productsColllection);   
        });
    };

    //Traer Productos por Categoria
    const getProductsByCategory = async (category)=>{
        const db=getFirestore();
        const q = query(collection(db,"products"),where("category","==", category));
        
         const snapshot = await getDocs(q);
            if(snapshot.size===0){
                console.log('Consulta sin resultados');
                setProductsByCategory([]);
            }else{
                    const productos = snapshot.docs.map((doc) => ({...doc.data(), id:doc.id}));                    
                    setProductsByCategory(productos);
                    
                }; 
    };


    //Traer de la collection Products el que coincida con el Id del Item seleccionado
    const getProductPorId = async (id)=>{
        
        const db=getFirestore();
        const qref = doc(db,'products',id); 
        const result= await getDoc(qref);
           if(result) {
            (setProductPorId({...result.data(), id:id}));
            setUrlImg(result.data().img);
           } else{
            console.log("Error: No se encontro el producto seleccionado");
           }
    }
    
    //Traer url de la imagen del producto
    const getUrl = async (img) =>{
        const storage=getStorage();
         await getDownloadURL(ref(storage,img))
            .then((url)=>{
                setUrlImage(url)
        })
    }

    return( {urlImage, getUrl, products, getProducts, productPorId, getProductPorId, urlImg,getProductsByCategory, productsByCategory} )
}
export {useFirebase}