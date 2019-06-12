const todoModel = require('../models/todo')

module.exports = {
  create: function (req, res, next) {
    todoModel.create({ title: req.body.title, desc: req.body.desc, userId: req.body.userId }, function (err, result) {
      if (err) {
        next(err)
      } else {
        res.json({ status: 'success', message: 'Todo created successfully' })
      }
    })
  },
  deleteById: function (req, res, next) {
    todoModel.findByIdAndDelete(req.body.todoId, function (err, todo) {
      if (err) {
        next(err)
      } else {
        res.json({ status: 'success', message: 'Todo successfully deleted' })
      }
    })
  },
  getAll: function (req, res, next) {
    let todoList = []
    todoModel.find({ userId: req.body.userId }, function (err, todos) {
      if (err) {
        next(err)
      } else {
        for (let todo of todos) {
          todoList.push({
            id: todo._id,
            title: todo.title,
            desc: todo.desc
          })
        }
        res.json({ status: 'success', message: 'Get todos successfully', todos: todoList })
      }
    })
  }
}
