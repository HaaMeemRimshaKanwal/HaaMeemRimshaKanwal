

// large_shirts
function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it will have the message: "${message}" printed on it.`);
}

makeShirt();
makeShirt("Medium");
makeShirt("Small", "Code is life");
