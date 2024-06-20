var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette"];
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
function showMagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
var greatMagicians = makeGreat(magicians);
showMagicians(greatMagicians);
