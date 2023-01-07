const $ = require("jquery");
$.get("postcodes.json");
function handleResponse(data) {
  console.log(data.length);
}
