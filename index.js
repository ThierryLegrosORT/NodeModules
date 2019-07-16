const car = {
    name: "Peugeot 406",
    color: "blue",
    equipment: ["climatisation", "airbag"],
    year: 2012,
    available: true,
};

console.log(car);
console.log();

console.log("La voiture est une " + car.name);
console.log("Elle est de couleur " + car.color);
console.log(`Elle date de ${car.year}`);
console.log();
// Chaines formatées:
// %s ==>> string
// %d ==>> number
// %j ==>> json
// %O ==>> object (depth = 3 max)
// %o ==>> object (depth = 5 max)

console.log("Elle est équipée de la %s et de l'%s", car.equipment[0].toUpperCase(), car.equipment[1]);
console.log();
console.log("JSON: %j", car);
console.log();
console.log("Objecto: %o", car);
console.log();
console.log("ObjectO: %O", car);
console.log();

console.time("myTimer");
for (let i = 0; i < 20000; i++);
console.timeEnd("myTimer");
console.log();

const fs = require("fs"); // déclarer en const pour utilisation multiple, ou require("fs").[extend] pour utilisation ponctuelle
const stdout = fs.createWriteStream("./stdout.log");
const stderr = fs.createWriteStream("./stderr.log");
console.log();