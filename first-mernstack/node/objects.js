let x = 5;
let y = 17;
let point = {
  x: 0,
  y: 15,
};
point.y = 111;
point.Z = 102;
point["t"] = "some value";
console.log(point["x"]);
