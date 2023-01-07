$(function () {
  $("load").click(sendAjax);
});
function sendAjax() {
  console.log("Sending ajax request");
  //send ajax request
  $.get("AjaxStudents.txt", handleResponse);
  console.log("Sending ajax request");
}
function handleResponse(response) {
  console.log("response received");
  $("#result").empty();
  $("#result").append(response);
}
