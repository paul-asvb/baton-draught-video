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


//input searchTerm, output 🧲Links
const search = (searchTerm) => {

    return TorrentSearchApi.search(searchTerm, 'Movies', 100).then((res) => {

        res.sort((a, b) => {
            return a.seeds > b.seeds
        });

        return res.filter(ele => ele.seeds > 10);

        //TorrentSearchApi.getMagnet(res[0]).then(ele=>console.log(ele))

    })
}

module.exports = {
    search
}