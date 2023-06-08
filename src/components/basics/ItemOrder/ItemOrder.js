import './ItemOrder.css'


const ItemOrder = ({ orderDoc, totalPrice }) => {

    return (
        <div>
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
                            <td className="tdProducto"><img src={item.img} alt={item.name} style={{ width: 50 }} />{item.name}</td>
                            <td >{item.quantity}</td>
                            <td >{`${parseFloat(item.price)}`}</td>
                            <td >{` $ ${parseFloat(item.price) * parseInt(item.quantity)}`}</td>
                        </tr>
                    )))}

                </tbody>
            </table>
            {totalPrice !== ''
                        ? (<div className='container '>
                            <div className='d-flex justify-content-end '>
                               
                              <span className="totalPrice text-end px-2 ml-5">{`TOTAL  $${totalPrice}`}</span>
                               
                            </div>

                        </div>)
                        : (<span></span>)}
        </div >
    )
}

export { ItemOrder }