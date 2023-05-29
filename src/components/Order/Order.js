import { useEffect, useState } from "react";
import { useFirebase } from "../../hooks/useFirebase/useFirebase"
import './Order.css'
import { Link } from "react-router-dom";


const Order = () => {

    const { lastOrder, getLastOrder, orderDoc, getOrderDocument } = useFirebase();
    const [totalPrice, setTotalPrice] =useState(0);

    useEffect(() => {
        getLastOrder();
    }, [])


    useEffect(() => {
        getOrderDocument(lastOrder)
    }, [lastOrder]);

    useEffect(()=>{
       let tot=0;
        (orderDoc?.items) && (orderDoc.items.forEach(item=>{
            tot += parseFloat(item.price) * parseInt(item.quantity)
        }))
        setTotalPrice(tot)
    },[orderDoc])

    return (
        <div className=" container card cardOrder mt-3 mb-3 text-center p-0">
            
                <h4 className="container-fluid text-center mb-3 orderTitle">{`Orden de Pedido nro. ${orderDoc?.order_number}`} </h4>
                <div className="container p-0  d-flex flex-column align-items-center pt-3 pb-5">
                    <div className="clientCard">
                        <div className="pb-3">
                            <span className="cliSpan">Cliente</span><span className="cliDataSpan">{orderDoc?.buyer?.name}</span>
                        </div>
                        <div className="container row d-flex justify-content-evenly align-items-center">
                            <div className="col-sm-6">
                                <span className="cliSpan">Teléfono</span><span className="cliDataSpan">{orderDoc?.buyer?.phone}</span>
                            </div>
                            <div className="col-sm-6">
                                <span className="cliSpan">E-mail</span><span className="cliDataSpan">{orderDoc?.buyer?.email}</span>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>PRODUCTO</th>
                            <th>CANT</th>
                            <th>PRECIO</th>
                            <th>TOTAL</th>                    
                        </tr>
                    </thead>
                    <tbody>
                        {(orderDoc?.items) && (orderDoc.items.map(item => (
                            <tr key={item.id}>
                                <td className="tdProducto"><img  src={item.img} alt={item.name} style={{width:50}} />{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{`${parseFloat(item.price)}`}</td>
                                <td>{` $ ${parseFloat(item.price)*parseInt(item.quantity)}`}</td>
                            </tr>
                        )))} 
                        <tr>
                           <td></td><td></td><td></td><td className="totalPrice text-center">{`Total $${totalPrice}`}</td> 
                        </tr>
                        
                    

                    </tbody>
                </table>
                <div>
                    <Link to='/'><button className="btn btn-secondary w-100">Cerrar Orden</button></Link>
                </div>
            

        </div>
    )
}
export { Order }