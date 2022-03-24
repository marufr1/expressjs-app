const user = require('../../models/index').user

exports.getUser = async (req, res) => {
    try {
        const dbUser = await user.findAll()
        res.status(200).send({
            status: "SUCCESS",
            data: dbUser
        })
    } catch {
        res.status(503).send({
            status: "FAILED",
            message: "Failed for load users table"
        })
    }
}

exports.postUser = async (req, res) => {
    const {firstName, lastName, email} = req.body

    await user.create({
        firstName: firstName,
        lastName: lastName,
        email: email
    }).then(users => {
        res.status(200).send({
            status: "SUCCESS",
            data: users
        })
    }).catch(err => {
        console.log(err)
        res.status(503).send({
            status: "FAILED",
            message: "Failed for create user to database"
        })
    })
}