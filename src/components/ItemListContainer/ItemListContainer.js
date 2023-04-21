import './ItemListContainer.css';

const ItemListContainer = ({greeting1, greeting2, imgPresentacion}) => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h1 className='greeting_text1'>{greeting1}</h1>
            <div>
                <img src={imgPresentacion} className='imgPreserntacion' alt='Imagen de Presentacion' />
            </div>
            <h4 className='greeting_text2'>{greeting2}</h4>
        </div>  
    )
}

export default ItemListContainer