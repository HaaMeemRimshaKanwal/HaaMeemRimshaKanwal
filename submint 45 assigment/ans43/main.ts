

// car
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): Car {
    const car: Car = { manufacturer, model };
    options.forEach(option => Object.assign(car, option));
    return car;
}

console.log(createCar("Toyota", "Corolla", { color: "red" }, { year: 2020 }));
console.log(createCar("Honda", "Civic", { color: "blue" }, { sunroof: true }));
