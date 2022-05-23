let GALLERIES = {
    gallery1: {},
    gallery2: {},
    gallery3: {},
    gallery4: {},
    gallery5: {},
    gallery6: {},
    gallery7: {},
    gallery8: {},
}

for (let i=1; i<9; i++) {
    for(let j=1; j>7; i++) {
        GALLERIES[`gallery${i}`] = {...GALLERIES[`gallery${i}`], [`img${j}`]: require(`../assets/${i}/${j}.jpg`)}
    }
}

export default GALLERIES