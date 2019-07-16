// const car = {
//     name: "Peugeot 406",
//     color: "blue",
//     equipment: ["climatisation", "airbag"],
//     year: 2012,
//     available: true,
// };

// console.log(car);
// console.log();

// console.log("La voiture est une " + car.name);
// console.log("Elle est de couleur " + car.color);
// console.log(`Elle date de ${car.year}`);
// console.log();
// // Chaines formatées:
// // %s ==>> string
// // %d ==>> number
// // %j ==>> json
// // %O ==>> object (depth = 3 max)
// // %o ==>> object (depth = 5 max)

// console.log("Elle est équipée de la %s et de l'%s", car.equipment[0].toUpperCase(), car.equipment[1]);
// console.log();
// console.log("JSON: %j", car);
// console.log();
// console.log("Objecto: %o", car);
// console.log();
// console.log("ObjectO: %O", car);
// console.log();

// console.time("myTimer");
// for (let i = 0; i < 20000; i++);
// console.timeEnd("myTimer");
// console.log();


// MODULE FS
// const fs = require("fs"); // déclarer en const pour utilisation multiple, ou require("fs").[extend] pour utilisation ponctuelle
// const stdout = fs.createWriteStream("./stdout.log");
// const stderr = fs.createWriteStream("./stderr.log");

// const Console = require("console").Console;
// const logger = new Console({ stdout, stderr });

// console.log();
// logger.log(`${Date.now()} :Salut !`);
// logger.error(`${new Date()} :Une erreur est interviendue`);


// MODULE PATH
// const path = require("path");

// console.log(path.dirname("/test/testeur/test.txt"));
// console.log(path.basename("/test/testeur/test.txt"));
// console.log(path.extname(__filename));

// console.log();
// console.log(path.sep);
// console.log(path.join("test", "testeur", "test.txt"));
// console.log();

// const from_to = path.relative("..", ".");
// const absolutePath = path.resolve(".", "abc", "test.txt");
// console.log(from_to);
// console.log(absolutePath);
// console.log();
// console.log(path.parse("/test.txt"));
// console.log();

// const pathWin = require("path").win32;
// console.log(pathWin.join("moi", "test"));

// MODULE URL
const url = "https://dwaps.fr:8787/ort-toulouse/exercices/?eval=react#lab1";
const dwapsUrl = new URL(url);

console.log(dwapsUrl.toString());
console.log(dwapsUrl);
console.log(dwapsUrl.hostname);

const sp = dwapsUrl.searchParams;

sp.set("newKey", "test");
console.log(dwapsUrl.toString());

console.log();
console.log(sp.get("eval"));

// SUPPRESSION D'ELEMENTS DANS L'URL
// const format = require("url").format;
const options = {
    auth: false,
    search: false,
    fragment: false,
};
console.log();
console.log(require("url").format(dwapsUrl, options));