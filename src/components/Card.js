function Card({ product: { title, image, alt } }) {
    return (
        <article className="card-wrapper">
            <h3>{title}</h3>
            <img src={image} alt={`un mueble vintage ${alt}`} />  
        </article>
    )

}
export default Card
