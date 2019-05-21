function Video (title, year, duration) {
    Media.call(this, title, duration);
    this.year = year;
}

Video.prototype = Object.create(Media.prototype);

Video.prototype.toHTML  = function () {
    var htmlString = '<li ';
    if (this.isPlaying) {
        htmlString += 'class="current"';
    }
    htmlString += '>';
    htmlString += this.title;
    htmlString += ' (';
    htmlString += this.year;
    htmlString += ') ';
    htmlString += '<span class="duration">  '
    htmlString += this.duration;
    htmlString += '</span></li>';
    return htmlString;
}
