import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../../context/ProdContext"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";




const useFirebase = ()=>{

    const [urlImage, setUrlImage] =useState();
    const [products, setProducts] = useState([])
    const [productPorId, setProductPorId] = useState()
    
    
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
    //Traer de la Table de Productos el que coincida con el Id
    const getProductPorId = (id)=>{
   
        const db=getFirestore();
        const q = query(collection(db,"products"),where("id","==", id));
        
        getDocs(q).then((snapshot)=>{
            if(snapshot.size===0){
                console.log('Consulta sin resultados')
            }else{
                setProductPorId(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
                
                console.log("Cantidad de Documentos Encontrados "+snapshot.docs.length);
                console.log("DATA  "+ productPorId);
            
            } 
            
        });
        
    }
    
    const getUrl = (img) =>{
        const storage=getStorage();
        getDownloadURL(ref(storage,img))
            .then((url)=>{
                setUrlImage(url)
                console.log("URL Seteada: "+urlImage)
        })
    }



    return( {urlImage, getUrl, products, getProducts, productPorId, getProductPorId} )
}
export {useFirebase}