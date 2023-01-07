let students = ["ali", "hamza", "chsjjh", "zahid", "yalmaz"];
// students[6] = "Shibbal";
// let searchStudents = students.find(findali);
students.sort(customSort);
// console.log(searchStudents);
function findali(std) {
  if (std == "ali") return true;
  else return false;
}
function customSort(a, b) {
  // reverse sort order
  if (b < a) return -1;
  else return 1;
}
// students.splice(1, 2, "ibn", "shiban");

console.log(...students);
let rateArray = [2, 4, 5, 6, 7, 5, 5, 1];
let newrates = rateArray.map(function (r) {
  return r * 2;
});
console.log(...rateArray);
console.log(...newrates);
