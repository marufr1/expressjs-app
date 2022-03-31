const user = require('../../models/index').user
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { privateKey, generateToken } = require('../middlewares/auth')

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

    if(email == user.email) {
        res.status(403).send({
            status: "FAILED",
            message: "User was registered, please fill difference email"
        })
    }

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

exports.postSignIn = async (req, res) => {
    const {email, password} = req.body

    await user.findOne({
        where: {
            email: email
        }
    }).then(thisUser => {
        if(!thisUser) {
            return res.status(404).send({message: "User not found"})
        }

        let isPasswordValid = bcrypt.compareSync(
            password, thisUser.password
        )

        if(!isPasswordValid) {
            return res.status(401).send({
                message: "Invalid password"
            })
        }

        const token = jwt.sign({
            firstName: thisUser.firstName,
            lastName: thisUser.lastName,
            id: thisUser.id,
            email: thisUser.email 
        }, privateKey, {expiresIn: '1h'})

        console.log(token)

        res.status(200).send({
            status: "SUCCESS",
            data: thisUser,
            token: token
        })
    }).catch(err => {
        console.log(err)
        res.status(503).send({
            status: "FAILED",
            message: err.message
        })
    })
}

exports.postSignUp = async (req, res) => {
    const {firstName, lastName, email, password} = req.body

    const hash = bcrypt.hashSync(password, 10)

    user.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash
    }).then(user => {
        const token = generateToken({
            firstName: user.firstName,
            lastName: user.lastName,
            id: user.id,
            email: user.email
        })

        res.status(200).send({
            status: "SUCCESS",
            message: "User berhasil dibuat",
            data: user,
            token: token
        })
    }).catch(err => {
        console.log(err)
        res.status(503).send({
            status: "FAILED",
            message: "Failed for create user to database"
        })
    })
}