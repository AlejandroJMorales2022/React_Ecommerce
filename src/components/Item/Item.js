import './Item.css';

const Item = ({id, name, img, price, stock}) =>{
    return (
        <article className='CardItem'>
            <header className='Hader'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='info'>
                    Stock Didsponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <button className='Option'>Ver Detalle</button> 
            </footer>
        </article>

    )
}

export default Item