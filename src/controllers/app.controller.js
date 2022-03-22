const db = require('../config/db')

const getAllData = async (req, res) => {
    await db.query('SELECT * FROM todos').then(result => {
        res.status(200).json({
            "status": "success",
            "data": result.rows
        })
    }).catch(e => {
        console.log(e)
        res.status(500).json({
            message: 'INTERNAL SERVER ERROR'
        })
    })
}

const postData = async (req, res) => {
    const body = req.body;

    await db.query(`INSERT INTO todos (title,checked)
    VALUES ('${body.title}', '${body.checked}')`)
    .then(result => {
        res.status(200).json({
            "status": "success"
        })
    }).catch(e => {
        console.log(e)
        res.status(500).json({
            message: 'INTERNAL SERVER ERROR'
        })
    })
}

const putData = async (req, res) => {
    const body = req.body
    const id = req.query.id

    await db.query(`UPDATE todos SET title = '${body.title}', 
    checked = '${body.checked}' WHERE id = '${id}'`)
    .then(result => {
        res.status(200).json({
            "status": "update success"
        })
    }).catch(e => {
        console.log(e)
        res.status(500).json({
            message: 'INTERNAL SERVER ERROR'
        })
    })
}

const deleteData = async (req, res) => {
    const id = req.params.id;

    await db.query(`DELETE FROM todos WHERE id = '${id}'`)
    .then(result => {
        res.status(200).json({
            "status": "delete success"
        })
    }).catch(e => {
        console.log(e)
        res.status(500).json({
            message: 'INTERNAL SERVER ERROR'
        })
    })
}

module.exports = {
    getAllData, postData, putData, deleteData
}