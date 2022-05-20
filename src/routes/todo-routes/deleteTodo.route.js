const express = require("express");
const database = require("../../database/models/index");
const router = express.Router();

const deleteTodoController = async (req, res) => {
  let id = parseInt(req.params.id);
  await database.todos.destroy({ where: { id: id } });
  res.status(201).send("deleted successfully");
};

module.exports = router.delete("/delete-todo/:id", deleteTodoController);
