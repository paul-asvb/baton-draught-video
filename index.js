const s = require('./search.js')
const csv = require('./csv.js')

const start = async function () {

    const movieName = await csv.getRandomMovie()
    console.log(movieName)
    const result = await s.search(movieName)
    console.log(result);
}

start();