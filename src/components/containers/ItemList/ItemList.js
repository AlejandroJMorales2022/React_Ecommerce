import Item from '../../basics/Item/Item';
import './ItemList.css';




const ItemList = ({products})=>{

  
    
    return(
        <>
            <div className="listGroup row d-flex justify-content-center align-items-center">
                {products.map (prod => <Item key={prod.id} {...prod} />)}
            </div>
        </>
        
        
    );

}

export default ItemList