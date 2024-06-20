function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (option) { return Object.assign(car, option); });
    return car;
}
console.log(createCar("Toyota", "Corolla", { color: "red" }, { year: 2020 }));
console.log(createCar("Honda", "Civic", { color: "blue" }, { sunroof: true }));
