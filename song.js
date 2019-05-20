function Song (title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.isPlaying = false
}

Song.prototype.play = function () {
    this.isPlaying = true;
}