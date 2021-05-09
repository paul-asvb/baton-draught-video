const csvFilePath = './narrator_movies.csv'
const csv = require('csvtojson')

const getRandomMovie = () => {
    return csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            const names = jsonObj.map((obj => obj.name))
            const l = names.length
            return names[Math.floor(Math.random() * l)]
        })
}

module.exports = {
    getRandomMovie
}