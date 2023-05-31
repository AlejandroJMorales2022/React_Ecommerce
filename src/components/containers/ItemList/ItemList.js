import Item from '../../basics/Item/Item';
import './ItemList.css';




const ItemList = ({products})=>{

  
    
    return(
        <>
            <div className="ListGroup row d-flex justify-content-center">
                {products.map (prod => <Item key={prod.id} {...prod} />)}
            </div>
        </>
        
        
    );

}

export default ItemList