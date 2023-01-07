const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();
//
//using the express Router to handle the incoming HTTP requests.

//The POST API creates a new To-Do item and stores the data in MongoDB. The HTTP request body contains the title and description fields, and the done field value is set to false for a new To-Do item.

//The PATCH and DELETE APIs expect the caller to pass the item id along with the HTTP request.
router.get("/", (req, resp) => {
  Todo.find()
    .then((data) => {
      resp.json(data);
    })
    .catch((e) => {
      resp.json({ message: e });
    });
});
router.post("/", (req, resp) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    done: false,
  });
  todo
    .save()
    .then((data) => {
      resp.json(data);
    })
    .catch((e) => {
      resp.json({ message: e });
    });
});
router.patch("/:id", (req, resp) => {
  Todo.updateOne(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        done: req.body.done,
      },
    }
  )
    .then((data) => {
      resp.json(data);
    })
    .catch((e) => {
      resp.json({ message: e });
    });
});
router.delete("/:id", (req, resp) => {
  Todo.deleteOne({ _id: req.params.id })
    .then((data) => {
      resp.json(data);
    })
    .catch((e) => {
      resp.json({ message: e });
    });
});
module.exports = router;
