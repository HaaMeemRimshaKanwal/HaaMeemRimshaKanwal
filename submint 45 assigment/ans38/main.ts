

// album
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(makeAlbum("Artist1", "Album1"));
console.log(makeAlbum("Artist2", "Album2", 10));
console.log(makeAlbum("Artist3", "Album3", 12));
