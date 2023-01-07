function makePizza(flavour, callBack) {
  console.log("order received ");
  console.log("Preparing Pizza");
  setTimeout(function () {
    callBack(flavour + " is ready");
    // return "Prepared" + flavour + "Pizza";
  }, 1000);
}
// console.log("Pizza order received ");
function handlePizza(pizza) {
  console.log(pizza + " Shibbal");
}
makePizza("fajita", handlePizza);
