import { useEffect, useState } from "react";
import { useFirebase } from "../../hooks/useFirebase/useFirebase"



const Order = () => {

    const { lastOrder, getLastOrder, orderDoc, getOrderDocument } = useFirebase();
    const [rendered, setRendered]= useState(false);

    const [items, setItems] = useState(null);
    useEffect(() => {
        getLastOrder();
    }, [])


    useEffect(() => {
        getOrderDocument(lastOrder)
        console.log(lastOrder)
    }, [lastOrder]);


    useEffect(() => {
        if (orderDoc) {
            console.log("La Orden Recibida "+ orderDoc )
        }
        
        setRendered(true)
        console.log(rendered)
    }, [orderDoc]);

    return (
        <div className=" conteiner card">
            <h1>Orden de Pedido</h1>
            { orderDoc ? ( orderDoc[0].items.map(item =>(
                    <>
                        <img src={item.img} alt={item.name} />
                        <p>{item.name}{item.price}</p>
                    </>
                    
                )) ):(<p>La Order de Pedido NO Existe</p>)} 
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>PRODUCTO</th>
                        <th>CANT</th>
                        <th>PRECIO</th>
                        <th>TOTAL</th>                    
                    </tr>
                </thead>
                <tbody>
                    {/* {(orderDoc && rendered ) ? (orderDoc[0].items.map(item => (
                        <tr key={item.id}>
                            <td><img  src={item.img} alt={item.name} style={{width:50}} />{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{`${parseFloat(item.price)}`}</td>
                            <td>{` $ ${parseFloat(item.price)*parseInt(item.quantity)}`}</td>
                        </tr>

                    )) ): (<p>no hay productos</p>)}  */}
                

                </tbody>
            </table>

        </div>
    )
}
export { Order }