const express = require("express");
const database = require("../../database/models/index");
const router = express.Router();

const addTodoController = async (req, res) => {
  let body = req.body;
  let user = await database.users.findOne({
    username: body.username,
  });
  console.log(user);
  if (user) {
    let createdTodo = await database.todos.create({
      ...body,
    });
    if (createdTodo) {
      res.status(200).send("added");
    } else {
      res.status(500).send(`the post can not created`);
    }
  } else {
    res.status(500).send(`To do that you should register`);
  }
};

module.exports = router.post("/add-todo", addTodoController);
