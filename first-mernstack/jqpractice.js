$(function () {
  $("#addbutton").click(handlebtnClick);
});
function handlebtnClick() {
  var newTodo = $("#newtodo").val();
  if (!newTodo) {
    $("#newtodo").addClass("error");
    return;
  }
  $("#newtodo").removeClass("error");
  $("#newtodo").val("");
  $("#todos").append("<li>" + newTodo + "</li>");
  $("#todos").on("click", "li", removeme);
}
function removeme() {
  $(this).fadeOut();
}
