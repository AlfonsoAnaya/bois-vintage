import THUMBS from "../assets/ThumbsImport.js"
import GALLERY from "../assets/GalleryImport.js"
let NewThumbs = []
let NewGallery = []


for (let i=1; i<9; i++) {
    const newThumb = THUMBS[`thumb${i}`]
    NewThumbs = [...NewThumbs, newThumb]
}
for (let i=1; i<9; i++) {
    const newPhoto = GALLERY[`gallery${i}`]
    NewGallery = [...NewGallery, newPhoto]
}


let productsArr = [
    {   
        id: 1,
        title: "silla de comedor mid-century",
        alt: "silla de madera",
        thumb: [NewThumbs[0]],
        price: "$1,400 MXN",
        style: "escandinavo",
        materials: "madera maciza (cedro), asiento tapizado en tela y patas de bronce",
        year: "circa 1960",
        measurements: "94cm (altura) 43cm (altura al asiento) 44cm (profundidad y ancho)",
        gallery: [NewGallery[0]],
    },
    {   
        id: 2,
        title: "sillón ramírez vázquez",
        alt: "silla de madera",
        thumb: [NewThumbs[1]],
        price: "6,990 MXN",
        style: "escandinavo",
        materials: "madera maciza (cedro), asiento tapizado en tela y patas de bronce",
        year: "circa 1960",
        measurements: "94cm (altura) 43cm (altura al asiento) 44cm (profundidad y ancho)",
    },
    {   
        id: 3,
        title: "mesa de centro mid-century",
        alt: "",
        thumb: [NewThumbs[2]],
        price: "4,500 MXN",
        style: "escandinavo",
        materials: "madera maciza (cedro), asiento tapizado en tela y patas de bronce",
        year: "circa 1960",
        measurements: "94cm (altura) 43cm (altura al asiento) 44cm (profundidad y ancho)",
    },
    {   
        id: 4,
        title: "mesa de noche dixy",
        alt: "silla de madera",
        thumb: [NewThumbs[3]],
        price: "2,190 MXN",
        style: "escandinavo",
        materials: "madera maciza (cedro), asiento tapizado en tela y patas de bronce",
        year: "circa 1960",
        measurements: "94cm (altura) 43cm (altura al asiento) 44cm (profundidad y ancho)",
    },
    {   
        id: 5,
        title: "mesa de noche dixy",
        alt: "silla de madera",
        thumb: [NewThumbs[4]],
        price: "2,190 MXN",
        style: "escandinavo",
        materials: "madera maciza (cedro), asiento tapizado en tela y patas de bronce",
        year: "circa 1960",
        measurements: "94cm (altura) 43cm (altura al asiento) 44cm (profundidad y ancho)",
    },
    {   
        id: 6,
        title: "mesa de noche dixy",
        alt: "silla de madera",
        thumb: [NewThumbs[5]],
        price: "2,190 MXN",
        style: "escandinavo",
        materials: "madera maciza (cedro), asiento tapizado en tela y patas de bronce",
        year: "circa 1960",
        measurements: "94cm (altura) 43cm (altura al asiento) 44cm (profundidad y ancho)",
    },
    {   
        id: 7,
        title: "mesa de noche dixy",
        alt: "silla de madera",
        thumb: [NewThumbs[6]],
        price: "2,190 MXN",
        style: "escandinavo",
        materials: "madera maciza (cedro), asiento tapizado en tela y patas de bronce",
        year: "circa 1960",
        measurements: "94cm (altura) 43cm (altura al asiento) 44cm (profundidad y ancho)",
    },
    {   
        id: 8,
        title: "mesa de noche dixy",
        alt: "silla de madera",
        thumb: [NewThumbs[7]],
        price: "2,190 MXN",
        style: "escandinavo",
        materials: "madera maciza (cedro), asiento tapizado en tela y patas de bronce",
        year: "circa 1960",
        measurements: "94cm (altura) 43cm (altura al asiento) 44cm (profundidad y ancho)",
    }
]

export default productsArr