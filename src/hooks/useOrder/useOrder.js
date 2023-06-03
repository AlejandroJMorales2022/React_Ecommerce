import { useEffect, useState } from "react";
import { useCartContext } from "../useCartContext/useCartContext";
import { useFirebase } from "../../services/hooks/useFirebase/useFirebase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../useAuthContext/useAuthContext";
import { useClientContext } from "../useClientContext/useClientContext";



const useOrder = () => {

    const { setOrderDocument, lastOrder, getLastOrder, orderId, setOrderId, setErrorPromise } = useFirebase();
    const navigate = useNavigate();
    const { cart, clearCart } = useCartContext();
    const [totalOrder, setTotalOrder] = useState(0);
    const { client } = useClientContext();

    const [order, setOrder] = useState({
        order_number: 0,
        date: '',
        buyer: {
            name: '',
            phone: '',
            email: ''
        },
        total: '',
        items: [{}]
    });

    const addNewOrder = () => {

        const items = cart.map(item => ({
            idprod: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
            quantity: item.quantity,
            total: (parseFloat(item.price) * parseInt(item.quantity))
        }));
        let total = 0;
        items.forEach(element => {
            total += element.total;
        });
        setTotalOrder(total);
        getLastOrder();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    const addOrder = async (order) => {
        try {
            const response = await setOrderDocument(order);
            if (response.success === true) {
                setOrderId(response.id);
                setErrorPromise('');
            }
        } catch (err) {
            if (order.total > 0) {
                console.error('No se pudo Guardar la Orden de Pedido en la base de datos...', err)
                setErrorPromise('No se pudo Guardar la Orden de Pedido en la base de datos...')
            }

        }
    }



    useEffect(() => {

        const fecha = new Date()
        setOrder(prev => ({
            ...prev, buyer: {
                name: client.name,
                phone: client.phone,
                email: client.email,
            },
            date: fecha,
            order_number: lastOrder + 1,
            items: cart,
            total: totalOrder
        }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastOrder])

    useEffect(() => {
        order.order_number > 0 &&
            addOrder(order)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [order])

    useEffect(() => {
        if (orderId !== 0 && orderId !== '') {
            navigate('/order');
            setTimeout(() => {
                clearCart();
            }, 1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orderId])

    return { addNewOrder };
}
export { useOrder };