const OS = require('opensubtitles-api');
const OpenSubtitles = new OS({
    useragent: 'UserAgent',
    username: '',
    password: '',
    ssl: true
});


const start = async function () {
    await OpenSubtitles.login().then(res => {
            console.log(res.token);
            console.log(res.userinfo);
        })
        .catch(err => {
            console.log(err);
        });

    const subtitles = await OpenSubtitles.search({
        sublanguageid: 'en',  
        query: '2021 The Year Earth Changed', // Text-based query, this is not recommended.
    })
    console.log(subtitles)

}

start();