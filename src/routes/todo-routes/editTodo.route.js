const express = require("express");
const database = require("../../database/models/index");
const router = express.Router();

const updateTodoController = async (req, res) => {
  const id = req.body.id;
  let toUpdate = await database.todos.findOne({ where: { id: id } });

  if (toUpdate) {
    toUpdate.complete = !toUpdate.complete;
    await toUpdate.save();
    res.status(200).send("user updated");
  }

  res.status(500).send("error");
};

module.exports = router.put("/update-todo", updateTodoController);
