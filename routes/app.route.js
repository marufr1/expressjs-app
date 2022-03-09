const express = require('express')
const router = express.Router()

const controller = require('../controller/app.controller')

router.get('/', controller.getAllData)
router.post('/', controller.postDataJson)
router.put('/:id', controller.putDataJson)
router.delete('/:id', controller.deleteDataJson)

router.get('/location/getcities', controller.getCities)
router.get('/location/getcitiesNameByWordCount', controller.getCitiesByWordCount)
router.get('/location/getprovinceByCityName', controller.getProvinceByCityName)

module.exports = router