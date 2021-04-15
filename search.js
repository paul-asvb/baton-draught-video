const TorrentSearchApi = require('torrent-search-api');

TorrentSearchApi.enableProvider('Torrentz2');
TorrentSearchApi.enableProvider('1337x');
TorrentSearchApi.enableProvider('ThePirateBay');
TorrentSearchApi.enableProvider('KickassTorrents');
TorrentSearchApi.enableProvider('Rarbg');
TorrentSearchApi.enableProvider('TorrentProject');
TorrentSearchApi.enableProvider('Torrent9');
TorrentSearchApi.enableProvider('Yts');
TorrentSearchApi.enableProvider('Limetorrents');
TorrentSearchApi.enableProvider('Eztv');

const torrents = TorrentSearchApi.search('The Ninth Day', 'Movies', 100);

console.log("search")
torrents.then((res) => {

    res.sort((a, b) => {
        return a.seeds > b.seeds
    });

    res.map(ele => {
        if (ele.seeds > 10) {
            console.log(ele.title, " - ", ele.seeds)
            //console.log(ele.title, " - ", ele.seeds )
            //TorrentSearchApi.getMagnet(ele).then(e=>console.log(ele, e))

            return ele
        }
    });

    //TorrentSearchApi.getMagnet(res[0]).then(ele=>console.log(ele))

})