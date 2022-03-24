const express = require('express')
const router = express.Router()

const controller = require('../controllers/app.controller')
const {getUser, postUser} = require('../controllers/user.controller')

router.get('/todo', controller.getAllData)
router.post('/todo', controller.postData)
router.put('/todo', controller.putData)
router.delete('/todo/:id', controller.deleteData)

router.get('/', getUser)
router.post('/', postUser)

module.exports = router