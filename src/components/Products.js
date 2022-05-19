import ProductsArr from "../data/products"
import Card from "./Card"

function Products() {
    return (
        <div className="products-grid">
            {ProductsArr.map((product) => <Card key={product.id} product={product}/>)}
        </div>

    )
}

export default Products