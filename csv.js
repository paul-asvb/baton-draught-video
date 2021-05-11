const csv = require('csvtojson')

const getRandomMovie = () => {
    const csvFilePath = './narrator_movies.csv'

    return csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            const names = jsonObj.map((obj => obj.name))
            const l = names.length
            return names[Math.floor(Math.random() * l)]
        })
}

const getAllMovies = () => {
    const csvFilePath = './narrator_movies.csv'

    return csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => jsonObj.map((obj => obj.year + " " + obj.name)))

}


const getAnimalArray = () => {
    const csvFilePath = './animals.csv'

    return csv()
        .fromFile(csvFilePath)
}

const getSubtitles = () => {
    const csvFilePath = './subtitles.csv'

    return csv()
        .fromFile(csvFilePath)
}


module.exports = {
    getRandomMovie,
    getAnimalArray,
    getSubtitles,
    getAllMovies
}