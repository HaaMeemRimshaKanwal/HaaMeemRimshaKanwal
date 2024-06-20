// //  unchanged_magicians
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette"];
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
function showMagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
var greatMagicians = makeGreat(__spreadArray([], magicians, true));
showMagicians(magicians);
showMagicians(greatMagicians);
