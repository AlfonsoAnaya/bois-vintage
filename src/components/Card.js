import { Link } from "react-router-dom"

function Card({ product: { id, title, thumb, alt, price } }) {
    return (
        <Link className="link " to={"/individual-product/" + id}>
            <article className="card-wrapper">
                <img src={thumb} alt={`un mueble vintage ${alt}`} />
                <div className="info-container">
                    <h3>{title}</h3>
                    <p>{price}</p>
                </div>
            </article>
        </Link>
    )

}
export default Card
