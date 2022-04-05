import util from "util";

console.info(util.format("Nama: %s", "Azzam"));

const person = {firstName: "Azzam", lastName: "Jiul"};
console.info(util.format("Person : %j", person));