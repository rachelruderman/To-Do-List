const todoController = require('../controllers').todo;
const todoItemController = require('../controllers').todoItem;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todo', todoController.create);
  app.get('/api/todo', todoController.list);

  app.post('/api/todo/:todoId/items', todoItemController.create);

  app.get('/api/todo/:todoId', todoController.retrieve);
};
