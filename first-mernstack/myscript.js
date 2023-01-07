function handlenewtodo() {
  console.log("handling handlenewtodo");
}
// Annoymous function do bindings here
// willl load after pager is loaded
window.onload = function () {
  var btn = document.getElementById("btnadd");
  btn.onclick = btn.onclick = handleadd;
};
function handleadd() {
  var newTodo = document.getElementById("addnewtodo").value;
  var todos = document.getElementById("todos");
  var newtodoText = document.createTextNode(newTodo);
  var newLi = document.createElement("li");
  newLi.appendChild(newtodoText);
  todos.appendChild(newLi);
}
function handleDelete(e) {
  var tag = e.target;
  var li = tag.parentNode;
  li.parentNode.removeChild(li);
}
