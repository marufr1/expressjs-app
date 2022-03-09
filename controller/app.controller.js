const fs = require('fs')
const {
    regencies,
    provinces
} = require('../data/location')


const getAllData = (req, res) => {
    fs.readFile('./data/data.json', (err, data) => {
        if (err) {
            console.log(err)
        }
        res.json(JSON.parse(data))
    })
}

const postDataJson = (req, res) => {
    const body = req.body;

    let thisData = fs.readFileSync('./data/data.json', {})

    thisData = JSON.parse(thisData)

    thisData.push(body)

    fs.writeFile('./data/data.json', JSON.stringify(thisData), (err) => {
        if (err) {
            console.log(err)
            res.status(400).json({
                message: 'ERROR'
            })
            return
        }
        res.json(thisData)
    })
    console.log(thisData)
}

const putDataJson = (req, res) => {
    let id = req.params.id
    let newText = req.body

    let updateData = fs.readFileSync('./data/data.json')

    let data = JSON.parse(updateData)

    data = data.filter((dataJson) => {
        return dataJson.id != id
    })

    data.push(newText)

    fs.writeFile('./data/data.json', JSON.stringify(data, newText, 2), (err) => {
        if (err) {
            console.log(err)
            return
        }
        res.json({
            "status": "success",
            "data": newText
        })
    })
    console.log(data)
}

const deleteDataJson = (req, res) => {
    const id = req.params.id;

    let deleteData = fs.readFileSync('./data/data.json')

    let data = JSON.parse(deleteData)

    data = data.filter((dataJson) => {
        return dataJson.id != id
    })

    fs.writeFile('./data/data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.log(err)
            return
        }
        res.json({
            "status": "success",
            "data": data
        })
    })
    console.log(data)
}

const getCities = (req, res) => {
    let provinsi = req.query.provinceName

    let filterProvince = provinces
    
    let resultData = filterProvince.concat(regencies)

    resultData = resultData.filter(province => province.name.toLowerCase().includes(provinsi.toLowerCase()))
    
    res.send(resultData)
}

const getCitiesByWordCount = (req, res) => {
    let counter = req.query.count

    let filterProvince = provinces

    let resultData = filterProvince.concat(regencies)

    resultData = resultData.filter(province => counter == province.name.split(" ").length)

    res.send(resultData)
}

const getProvinceByCityName = (req, res) => {
    let cityName = req.query.cityName

    let getCity = regencies.filter(item => item.name.toLowerCase().includes(cityName.toLowerCase()))

    let getRegencyId = getCity.map(item => {return item.province_id})
    
    let resultData = provinces.filter(item => item.id.match(getRegencyId))
    
    res.send(resultData)
    console.log(resultData)
}

module.exports = {
    getAllData,
    postDataJson,
    putDataJson,
    deleteDataJson,
    getCities,
    getCitiesByWordCount,
    getProvinceByCityName
}