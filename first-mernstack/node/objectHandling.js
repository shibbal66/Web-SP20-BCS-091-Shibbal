let address = { title: "Liberty Market", location: "Lahore" };
// to get its attributes as separate variable
const { title, location } = address;
console.log(location);
function printAddress(title, location) {
  console.log(title + " is located in " + location);
}
printAddress(address.title, address.location);
