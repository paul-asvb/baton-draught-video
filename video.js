var ffmpeg = require('ffmpeg');


// name of file
// starttime 00:23:23
// duration 00:33:33
const cut = (name, start, duration) => {
    console.log("cut", name, start, duration)
    var process = new ffmpeg('./test.mkv');
    return process.then((video) =>
        video
        .setVideoStartTime("00:11:23")
        .setVideoDuration(10)
        .save(`./out/${name}.mpg`, function (error, file) {
            if (!error) {
                console.log('Video file: ' + file);
            } else {
                console.log('Video error: ' + error);
            }
        }))
}

module.exports = {
    cut
}