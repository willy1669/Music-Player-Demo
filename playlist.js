function Playlist () {
    this.songs = [];
    this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function (song) {
    this.songs.push(song);
}