// name of file
// starttime 00:23:23
// duration 00:33:33

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

const cut = (name, start, duration) => {

    const execSync = require('child_process').execSync;
    execSync(`ffmpeg  -y -i ./test.mkv -ss ${msToTime(start)} -t ${msToTime(duration)} ./out/${name}.mpg`);
}

module.exports = {
    cut
}