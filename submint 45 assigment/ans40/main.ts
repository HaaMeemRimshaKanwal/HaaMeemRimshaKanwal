


const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette"];

function makeGreat(magicians: string[]): string[] {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

const greatMagicians = makeGreat(magicians);
showMagicians(greatMagicians);
