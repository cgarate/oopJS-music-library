

// An OOP music library exercise

let Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

let Playlist = function (name) {
  this.name = name;
  this.tracks = [];
}

let Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Playlist.prototype.overallRating = function () {
  //Average the rating of my tracks
  return this.tracks.reduce( function(prev, curr) {
    return prev + curr.rating
  }, 0) / this.tracks.length;
}

Playlist.prototype.totalDuration = function () {
  //Sum the duration of all my tracks.
  return Math.round(this.tracks.reduce( function(prev, curr) {
    return prev + curr.length
  }, 0) / 60)
}

myLibrary = new Library("Music", "@garateca");
myPlaylist = new Playlist("Setting the mood");
myPlaylist.tracks.push({title: "Bohemian Rhapsody", rating: 4, length: 357});
myPlaylist.tracks.push({title: "Love me do", rating: 4, length: 235});
myPlaylist.tracks.push({title: "We Are The Champions", rating: 4, length: 260});
myPlaylist.tracks.push({title: "Dust In The Wind", rating: 3, length: 221});

myLibrary.playlists.push(myPlaylist);

console.log(myPlaylist.overallRating());
console.log(myPlaylist.totalDuration());
console.log("myLibrary: ", myLibrary);
console.log("myPlaylist: ", myPlaylist);
