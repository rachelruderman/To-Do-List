//Notice that we've edited both the content and complete fields. We've added a not-null constraint in the content field and a default value for the complete field. In general, having a default value means that if we don't provide a value for that field when creating it, the database is going to use the provided default value for that field. In addition to that, we've also defined the relationship between the TodoItems and the Todo objects. The onDelete: CASCADE tells Postgres that if we delete a todo, its associated todo items should be deleted as well (cascade the delete action).

module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
//adding a way to see if the item has been completed or not
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        TodoItem.belongsTo(models.Todo, {
          foreignKey: 'todoId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return TodoItem;
};
