const s = require('./search.js')
const csv = require('./csv.js')

const start = async function () {

    const movies = await csv.getAllMovies()
    const searchPromisArray = movies.reverse().map(name => {
        const fn = () => s.search(name)
        return fn;
    });

    await searchPromisArray.reduce(async (previousPromise, nextAsyncFunction) => {
        await previousPromise;
        const result = await nextAsyncFunction();
        result.map(e => console.log(e.title))
    }, Promise.resolve());
}

start();