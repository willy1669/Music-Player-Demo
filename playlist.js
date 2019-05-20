function Playlist () {
    this.songs = [];
    this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function (song) {
    this.songs.push(song);
}

Playlist.prototype.play = function () {
    var currentSong = this.songs[this.nowPlayingIndex];
    currentSong.play();
}

Playlist.prototype.stop = function () {
    var currentSong = this.songs[this.nowPlayingIndex];
    currentSong.stop();
}