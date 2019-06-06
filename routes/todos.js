const express = require('express')
const router = express.Router()
const todoController = require('../app/controllers/todo')

router.post('/', todoController.create)
router.get('/', todoController.getAll)
router.delete('/', todoController.deleteById)

module.exports = router
