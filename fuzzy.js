const Fuse = require('fuse.js')
const csv = require('./csv.js')
const subtitle = require('subtitle');
const fs = require('fs')

const start = async function () {

    const animals = await (await csv.getAnimalArray()).map(a => a.animals)
    const input = fs.readFileSync('test.srt', 'utf8')
    const subtitles = subtitle.parseSync(input).map(e => e.data.text)

    let score = 0

    animals.forEach(a => {
        const options = {
            includeScore: true,
            includeMatches: true,
            threshold: 0.4,
            minMatchCharLength: 6 //Math.min(a.length, 6)
        }
        const fuse = new Fuse(subtitles, options)

        const result = fuse.search(a)
        if (result.length > 0) {
            console.log(result.map(e => e.item))
        }
        score = score + result.length
    })

}

start();