// large_shirts
function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and it will have the message: \"").concat(message, "\" printed on it."));
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "Code is life");
