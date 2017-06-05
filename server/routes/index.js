const todoController = require('../controllers').todo;
const todoItemController = require('../controllers').todoItem;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todo', todoController.create);
  app.get('/api/todo', todoController.list);

  app.post('/api/todo/:todoId/items', todoItemController.create);

  app.put('/api/todo/:todoId/items/:todoItemId', todoItemController.update);
  app.delete('/api/todo/:todoId/items/:todoItemId', todoItemController.destroy);

  app.get('/api/todo/:todoId', todoController.retrieve);
  app.put('/api/todo/:todoId', todoController.update);
  app.delete('/api/todo/:todoId', todoController.destroy);

  // For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/todo/:todoId/items', (req, res) =>
  res.status(405).send({message: 'Method Not Allowed',}));

};
