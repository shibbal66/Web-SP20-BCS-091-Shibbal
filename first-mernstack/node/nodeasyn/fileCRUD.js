const fs = require("fs");
// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);
// console.log("after the dta  ");
//AYNCHRONOUS
//

// CRUD
// folder creation
// fs.mkdir("CrudNode", (err) => {
//   console.log("Folder created");
// });
// Create file
// fs.writeFile("./CrudNode/bio.txt", "Shibbal Farooq", (err) => {
//   console.log("File created");
// });
// append file
// fs.appendFile("./CrudNode/bio.txt", "Shibbal kkkkFarooq", (err) => {
//   console.log("file aPPENDED");
// });
// // read the file
// fs.readFile("./CrudNode/bio.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// rename
fs.rename("./CrudNode/bio.txt", "./CrudNode/mybio.txt", (err) => {
  console.log("rename done");
});
// delete file
// fs.unlink("./CrudNode/mybio.txt", (err) => {
//   console.log("delete done");
// });
// delete folder
fs.rmdir("./CrudNode", (err) => {
  console.log("delete done");
});
