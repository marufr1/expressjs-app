const express = require('express')
const router = require('./routes/app.route')
const app = express()
const port = 3000


// by Muhammad Ma'ruf Rahman

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})