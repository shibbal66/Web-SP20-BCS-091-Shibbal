let postcodes = require("./postcodes.json");
console.log(postcodes.length);
let obj = postcodes.findIndex((p) => p.Region == "Tamworth");
console.log(obj);
