let THUMBS = {}

for (let i=1; i<9; i++) {
    THUMBS = {...THUMBS, [`thumb${i}`]: require(`../assets/thumb/${i}.jpg`)}
}

export default THUMBS


