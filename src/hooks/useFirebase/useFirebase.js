import { useState } from "react"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";




const useFirebase = ()=>{

    const [urlImage, setUrlImage] =useState('un carajo');
    const [products, setProducts] = useState([])
    const [productPorId, setProductPorId] = useState({})
    const [urlImg, setUrlImg] = useState('')
    const [imagen,setImagen] =useState('')
    const [productsByCategory, setProductsByCategory] =useState([])
    
    
    const getProducts = (condicion) =>{
       if(condicion==='todos'){
        const db=getFirestore();
        const collectioRef = collection(db,"products");
        getDocs(collectioRef).then((querySnapshot) => {
            const productsColllection=querySnapshot.docs.map((doc)=>doc.data())
            setProducts(productsColllection);
            
        })
       }
    }
    //Traer Productor por Categoria
    const getProductsByCategory = (category)=>{
        const db=getFirestore();
        const q = query(collection(db,"products"),where("category","==", category));
        
        getDocs(q).then((snapshot)=>{
            if(snapshot.size===0){
                console.log('Consulta sin resultados')
                setProductsByCategory([]);
            }else{
                    /* console.log(snapshot.docs.length) */
                    const productos = snapshot.docs.map((doc) => doc.data())                    
                    setProductsByCategory(productos);
                    /* console.log("datos por categoria "+ productos) */
                    
                } 
            
            });
            
    }

    //Traer de la Table de Productos el que coincida con el Id
    const getProductPorId = (id)=>{
   
        const db=getFirestore();
        const q = query(collection(db,"products"),where("id","==", id));
        
        getDocs(q).then((snapshot)=>{
            if(snapshot.size===0){
                console.log('Consulta sin resultados')
            }else{
                    snapshot.docs.forEach((doc) => {
                    
                    console.log("IMAGEN "+doc.data().img);
                    const imagen=doc.data().img;
                    getUrl(imagen)
                    setUrlImg(doc.data().img);
                    setProductPorId({...doc.data(), url:urlImg});
                    /* console.log("ref a la URL de la imagen "+doc.data().img) */
                    
                    /* const storage = getStorage();

                    const starsRef = ref(storage, doc.data().img);

                    // Get the download URL
                    getDownloadURL(starsRef)
                    .then((url) => {
                        // Insert url into an <img> tag to "download"
                        if(url.length>0){
                            setImagen(url)
                            console.log(url)
                        }
                        setUrlImage(url)
                        
                    }) */
                    
                   /*  const storage=getStorage();
                    getDownloadURL(ref(storage,(doc.data().img).toString()))
                        .then((url)=>{
                         setUrlImage(url)}) */
                            
                })  
                
                
               /*  setProductPorId(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))); */
                
                /* console.log("Cantidad de Documentos Encontrados "+snapshot.docs.length);
                console.log("DATA  "+ {productPorId}.price); */
            
            } 
            
        });
        
    }
    
    const getUrl = async (img) =>{
        const storage=getStorage();
         await getDownloadURL(ref(storage,img))
            .then((url)=>{
                setUrlImage(url)
        })
    }



    return( {urlImage, getUrl, products, getProducts, productPorId, getProductPorId, urlImg, imagen,getProductsByCategory, productsByCategory} )
}
export {useFirebase}