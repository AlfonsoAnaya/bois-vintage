let totalProducts = 8
let photosPerGallery = 6

let GalleriesArr = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

for (let i=1; i<= totalProducts; i++) {
    for(let j=1; j<= photosPerGallery; j++) {
        GalleriesArr[i-1] = [...GalleriesArr[i-1], require(`../assets/${i}/${j}.jpg`)]
    }
}

export default GalleriesArr