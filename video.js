// name of file
// starttime 00:23:23
// duration 00:33:33
const cut = (name, start, duration) => {
    const execSync = require('child_process').execSync;
    execSync(`ffmpeg  -y -i ./test.mkv -ss ${start} -t ${duration} ./out/${name}.mpg`);
}

module.exports = {
    cut
}