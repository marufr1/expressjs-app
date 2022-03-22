const express = require('express')
const router = express.Router()

const controller = require('../controllers/app.controller')

router.get('/', controller.getAllData)
router.post('/', controller.postData)
router.put('/', controller.putData)
router.delete('/:id', controller.deleteData)

module.exports = router