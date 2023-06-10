import Item from "../../basics/Item/Item"
import './CategoryList.css'

const CategoryList = ({ products, category }) => {

    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="Title container-fluid"><b>{category}</b></div>
            </div>
            <div className="row d-flex justify-content-center">
                {(products.map(prod => <Item key={prod.id}{...prod} />))}
            </div>


        </>

    )
}
export { CategoryList }