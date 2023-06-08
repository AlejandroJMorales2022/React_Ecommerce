import { useEffect, useState } from "react";
import { useFirebase } from "../../services/hooks/useFirebase/useFirebase"
import './Order.css'
import { Link } from "react-router-dom";
import { useProductsContext } from "../../hooks/useProductsContext/useProductsContext";
import { useAuthContext } from "../../hooks/useAuthContext/useAuthContext";
import { useFirebaseClient } from "../../services/hooks/useFirebase/useFirebaseClient";
import { useClientContext } from "../../hooks/useClientContext/useClientContext";
import { ItemOrder } from "../../components/basics/ItemOrder/ItemOrder";



const Order = () => {


    const { lastOrder, getLastOrder, orderDoc, getOrderDocument } = useFirebase();
    const [totalPrice, setTotalPrice] = useState(0);
    const { setPageIndex } = useProductsContext();
    const { emailAuth } = useAuthContext();
    const { getClient } = useFirebaseClient();
    const { client } = useClientContext();

    useEffect(() => {
        getClient('email', emailAuth)
        getLastOrder();
        setPageIndex('Order');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        getOrderDocument(lastOrder)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastOrder]);

    useEffect(() => {
        let tot = 0;
        (orderDoc?.items) && (orderDoc.items.forEach(item => {
            tot += parseFloat(item.price) * parseInt(item.quantity)
        }))
        setTotalPrice(tot)
    }, [orderDoc])

    return (
        <>
            <div className="mainContainer">
                <div className=" container card cardOrder mt-3 text-center p-0 ">
                    {orderDoc?.order_number &&
                        <>
                            <h4 className="container-fluid text-center mb-3 orderTitle">{`Orden de Pedido nro. ${orderDoc?.order_number} `} <span className="IdOrder d-block">{`(Track: ${orderDoc?.id})`}</span></h4>
                            <div className="dateContainer pe-3 text-end">{`Fecha ${(orderDoc?.date.toDate().toLocaleDateString('ES'))}`}</div>
                        </>
                    }

                    <div className="container p-0  d-flex flex-column align-items-center pt-3 pb-5">

                        <div className="clientCard row d-flex justify-content-center align-items-center p-1">
                            <div className="col-12 ">
                                <span className="cliSpan">Usuario</span><span className="cliDataSpan">{` ${orderDoc?.buyer?.name} `}</span>
                            </div>
                            <div className="col-12 ">
                                <span>{`${orderDoc?.buyer?.email}`}</span>
                            </div>
                        </div>


                    </div>
                    <div className="OrderDetailContainer">
                        <ItemOrder orderDoc={orderDoc} totalPrice={totalPrice}/>
                       {/*  <table className="table table-striped">
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
                                        <td className="tdProducto"><img src={item.img} alt={item.name} style={{ width: 50 }} />{item.name}</td>
                                        <td >{item.quantity}</td>
                                        <td >{`${parseFloat(item.price)}`}</td>
                                        <td >{` $ ${parseFloat(item.price) * parseInt(item.quantity)}`}</td>
                                    </tr>
                                )))}
                                <tr>
                                    <td></td><td></td><td></td><td className="totalPrice text-center">{`TOTAL  $${totalPrice}`}</td>
                                </tr>
                            </tbody>
                        </table> */}
                        <div className="container text-start p-0">
                            <div className="dataClientContainer row d-flex justify-content-center card m-3">
                                <div className="col-12 text-center pt-2 pb-3">
                                    <span className="cliSpan">Datos del Cliente</span>
                                </div>
                                <div className="ps-5 ms-5"><span className="cliSpan">Domicilio</span></div>
                                <div className="domicilio pb-1">
                                    <div className="pb-1 ">
                                        <span className="cliSpan">Calle</span><span className="cliDataSpan">{`${client?.residence?.street} `}</span><span className="cliSpan">Número</span><span>{`${client?.residence?.number}`}</span>
                                    </div>
                                    <div className="pb-2 ">
                                        <span className="cliSpan">Ciudad</span><span className="cliDataSpan">{`${client?.residence?.city} `}</span><span className="cliSpan">Provincia</span><span>{`${client?.residence?.state}`}</span>
                                    </div>
                                </div>

                                <div className="pb-2 ">
                                    <span className="cliSpan">Teléfono</span><span className="cliDataSpan">{client?.phone}</span>
                                </div>
                                <div className="pb-2 ">
                                    <span className="cliSpan">E-mail</span><span className="cliDataSpan">{client?.email}</span>
                                </div>
                                {client?.obs &&
                                    <div className="pb-2 ">
                                        <span className="cliSpan">Observaciones</span><span className="cliDataSpan">{client?.obs}</span>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                    <div className="pt-5">
                        <Link to='/'><button className="btn btn-secondary w-75">Cerrar Orden</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Order }