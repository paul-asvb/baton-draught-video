const OS = require('opensubtitles-api');
const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
var string = require("string-sanitizer");

require('dotenv').config()

const OpenSubtitles = new OS({
    useragent: 'UserAgent',
    username: process.env.OPEN_SUB_USER,
    password: process.env.OPEN_SUB_PW,
    ssl: true
});


const downloadSubtitle = async function (filmName) {

    const path = `./subs/${string.sanitize(filmName)}.srt`

    if (fs.existsSync(path)) {
        return
    }

    await OpenSubtitles.login()

    const subtitles = await OpenSubtitles.search({
        sublanguageid: 'eng',
        query: filmName, // Text-based query, this is not recommended.
    })
    if (subtitles.en) {
        const file = fs.createWriteStream(path);
        console.log(subtitles.en)
        https.get(subtitles.en.url, function (response) {
            response.pipe(file);
        });
    }


}


//downloadSubtitle();

module.exports = {
    downloadSubtitle
}