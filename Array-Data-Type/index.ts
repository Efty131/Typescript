let userNames: string[];
let data: Array<string>;
// Typescript a 2 bhabey array data type use kora jay. Same kaj e kore
userNames = ["Anis", "Efty", "Someone"];
data = ["Name", "Age", "Location"];

console.log(userNames[1]);
console.log(data[0]);
// union with array
let multipleData: (string | number)[];
multipleData = [123, "Id"];
console.log(multipleData[0]);
