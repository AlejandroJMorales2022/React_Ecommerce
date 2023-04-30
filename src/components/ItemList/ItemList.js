import './ItemList.css';
import Item from "../Item/Item";


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