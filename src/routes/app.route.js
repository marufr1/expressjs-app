const express = require('express')
const router = express.Router()

const controller = require('../controllers/app.controller')
const {getUser, postUser} = require('../controllers/user.controller')
const {postProduct, getProduct, getProductbyUserId} = require('../controllers/product.controller')

router.get('/todo', controller.getAllData)
router.post('/todo', controller.postData)
router.put('/todo', controller.putData)
router.delete('/todo/:id', controller.deleteData)

router.get('/', getUser)
router.post('/', postUser)

router.post('/product', postProduct)
router.get('/product', getProduct)
router.get('/product/:user_id', getProductbyUserId)

module.exports = router