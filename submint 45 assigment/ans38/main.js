function makeAlbum(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(makeAlbum("Artist1", "Album1"));
console.log(makeAlbum("Artist2", "Album2", 10));
console.log(makeAlbum("Artist3", "Album3", 12));
