//defined title and description fields that are of the type String. We also have a boolean field with the name done to indicate the completion of a To-Do task.

//The schema uses the todos MongoDB collection
const mongoose = require("mongoose");
const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  done: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("todos", TodoSchema);
