const express = require('express')
const router = express.Router()

const controller = require('../controllers/app.controller')
const {getUser, postUser, postSignIn, postSignUp} = require('../controllers/user.controller')
const {postProduct, getProduct, getProductbyUserId} = require('../controllers/product.controller')
const auth = require('../middlewares/auth')

router.get('/todo', controller.getAllData)
router.post('/todo', controller.postData)
router.put('/todo', controller.putData)
router.delete('/todo/:id', controller.deleteData)

router.get('/', getUser)
router.post('/', postUser)

router.post('/product', auth.verify, postProduct)
router.get('/product', getProduct)
router.get('/product/:user_id', getProductbyUserId)
router.post('/login', postSignIn)
router.post('/signup', postSignUp)

module.exports = router