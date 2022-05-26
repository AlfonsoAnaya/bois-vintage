import { useState } from "react"
import { useParams } from "react-router-dom";
import productsArr from "../data/products"


function IndividualProduct() {
    let { id } = useParams();
    let current = productsArr[id - 1]
    let [currentPhoto, setCurrentPhoto] = useState(0)

    function nextPhoto() {
        if (currentPhoto < 5) {
            setCurrentPhoto(currentPhoto + 1)

        } else {
            setCurrentPhoto(0)
        }
        console.log(currentPhoto)
    }

    function prevPhoto() {
        if (currentPhoto > 0) {
            setCurrentPhoto(currentPhoto - 1)

        } else {
            setCurrentPhoto(5)
        }

    }

    function selectphoto(imgNum) {
        setCurrentPhoto(imgNum)
        console.log(currentPhoto)
    }

    return (
        <div className="product-container">
            <div className="gallery">
                <div className="gallery-imgs">
                    <img src={current.gallery[currentPhoto]} alt={current.description} />
                    <button className="btn btn-next" onClick={nextPhoto} > → </button>
                    <button className="btn btn-prev" onClick={prevPhoto}> ← </button>
                </div>

                <div className="gallery-nav-container">
                    <div className={currentPhoto===0 ? "active gallery-nav-item" : "gallery-nav-item"} onClick={() => selectphoto(0)}></div>
                    <div className={currentPhoto===1 ? "active gallery-nav-item" : "gallery-nav-item"} onClick={() => selectphoto(1)}></div>
                    <div className={currentPhoto===2 ? "active gallery-nav-item" : "gallery-nav-item"} onClick={() => selectphoto(2)}></div>
                    <div className={currentPhoto===3 ? "active gallery-nav-item" : "gallery-nav-item"} onClick={() => selectphoto(3)}></div>
                    <div className={currentPhoto===4 ? "active gallery-nav-item" : "gallery-nav-item"} onClick={() => selectphoto(4)}></div>
                    <div className={currentPhoto===5 ? "active gallery-nav-item" : "gallery-nav-item"} onClick={() => selectphoto(5)}></div>
                </div>
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