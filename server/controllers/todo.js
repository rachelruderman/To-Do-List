//this code is v difficult for me to understand. Ask Antonio to explain it

const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Todo
    .findAll({
      include: [{
        model: TodoItem,
        as: 'todoItems',
      }],
    })
    .then(todo => res.status(200).send(todo))
    .catch(error =>
    res.status(400).send(error));
  },
  retrieve(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(oneTodo => {
        if (!oneTodo) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return res.status(200).send(oneTodo);
      })
      .catch(error => res.status(400).send(error));
  },
};
