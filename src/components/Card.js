function Card({ product: {title, thumb, alt, price} }) {
    return (
        <article className="card-wrapper">
            <img src={thumb} alt={`un mueble vintage ${alt}`} />  
            <div className="info-container">
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
        </article>
    )

}
export default Card
