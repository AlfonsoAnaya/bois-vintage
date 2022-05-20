import { useParams } from "react-router-dom";
import productsArr from "../data/products"

function IndividualProduct() {
    let { id } = useParams();
    let current = productsArr[id-1]
    return (
        <div className="product-container">
            <div className="gallery">
            <img src={current.thumb} alt={current.description}/>
            </div>
            <div className="product-details">
                <h2>{current.title}</h2>
                <p><strong>estilo </strong>{current.style}</p>
                <p><strong>material </strong>{current.materials}</p>
                <p><strong>fabricación </strong>{current.year}</p>
                <p><strong>medidas </strong>{current.measurements}</p>
                <p>{current.price}</p>
                <p className="contact-p">¿Te interesa? Escríbenos por WhatsApp (o llámanos): 55-3774-6078 y 55-1030-4245</p>
            </div>
        </div>
    )
}

export default IndividualProduct