const csv = require('./csv.js')
const subtitles = require('./subtitles');

const start = async function () {

    const allNaratorMovies = await csv.getAllMovies()

    for (const movie of allNaratorMovies) {
        await subtitles.downloadSubtitle(movie)
    }

}

start();