import React, { useState, useEffect } from "react";
import {
  postTodosAPI,
  getTodosAPI,
  patchTodosAPI,
  deleteTodosAPI,
} from "./apis/todos";
import CreateToDo from "./CreateToDo";
import TodoTable from "./TodoTable";
function App() {
  const myStyle = {
    backgroundImage:
      "http://www.tasklist-template.com/wp-content/uploads/2017/11/1511278521-hOiWIQF.png",
    height: "10vh",

    fontSize: "20px",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
  };
  // we are using the CreateToDo component that we created earlier. We are also passing the onCreate property that is assigned with the addTodo function.

  //Once the user submits the To-Do item form, that invokes this addTodo function and persists the record in the MongoDB.

  //The below images shows the add To-Do form. We can observe that once the user form submission invokes the POST API and we get the persisted record as the response..We are using the Effect hook of React to fetch the records from the back-end during the page rendering.

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodosAPI().then((todos) => setTodos(todos));
  }, []);
  const addTodo = (todo) => {
    postTodosAPI(todo).then((data) => {
      setTodos([...todos, data]);
    });
  };
  const updateTodo = (id, done) => {
    patchTodosAPI(id, done ? false : true).then((data) => {
      if (data) {
        getTodosAPI().then((todos) => setTodos(todos));
      }
    });
  };
  const deleteTodo = (id) => {
    deleteTodosAPI(id).then((data) => {
      if (data.deletedCount === 1) {
        setTodos(todos.filter((todo) => todo._id !== id));
      }
    });
  };
  return (
    <div style={myStyle}>
      <main role="main" className="container">
        <CreateToDo onCreate={addTodo} />
        <TodoTable todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
      </main>
    </div>
  );
}
export default App;
