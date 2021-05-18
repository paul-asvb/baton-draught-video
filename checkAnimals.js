const Fuse = require('fuse.js')
const csv = require('./csv.js')
const subtitle = require('subtitle');
const fs = require('fs')
const video = require('./video');
var string = require("string-sanitizer");

const start = async function () {

    const animals = await (await csv.getAnimalArray()).map(a => a.animals)
    const input = fs.readFileSync('test.srt', 'utf8')
    const subtitles = subtitle.parseSync(input)
    let matches = []


    animals.forEach(a => {
        const options = {
            includeScore: true,
            includeMatches: true,
            threshold: 0.1,
            minMatchCharLength: 4, //Math.min(a.length, 6),
            keys: ['data.text']
        }

        const fuse = new Fuse(subtitles, options)

        const results = fuse.search(a)

        matches = matches.concat(results);
    })

    console.log(Date())
    matches.forEach(match => {
        console.log(match.item)
        const name = string.sanitize(match.item.data.text)
        const start = Math.floor(match.item.data.start)
        const end = Math.floor(match.item.data.end)
        const duration = end - start
        video.cut(name, start, duration)
    })
    console.log(Date())

}

start();