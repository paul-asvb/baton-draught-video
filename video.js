var ffmpeg = require('ffmpeg');
try {
    var process = new ffmpeg('./test.mkv');
    process.then(function (video) {

        video
            .setVideoSize('100x?', true, true)
            .save('./out.avi', function (error, file) {
                if (!error) {
                    console.log('Video file: ' + file);

                } else {
                    console.log('Video error: ' + error);

                }
            });

    }, function (err) {
        console.log('Error: ' + err);
    });
} catch (e) {
    console.log(e.code);
    console.log(e.msg);
}