/**
* @class Sermon
*
* @param {string} title The title of the sermon
* @param {string} speaker The preacher
* @param {string} date The day on which the sermon was preached
*/
function Sermon(title, speaker, date) {
    this.title = title;
    this.speaker = speaker;
    this.date = date;
}

Sermon.prototype.getTitle = function () {
    return this.title;
}

Sermon.prototype.setTitle = function (value) {
    this.title = value;
}

Sermon.prototype.getSpeaker = function () {
    return this.speaker;
}

Sermon.prototype.setSpeaker = function (value) {
    this.speaker = value;
}

Sermon.prototype.getDate = function () {
    return this.date;
}

Sermon.prototype.setDate = function (value) {
    this.date = value;
}

Sermon.prototype.toString = function () {
    return this.title + " (" + this.speaker + ") - " + this.date;
}

