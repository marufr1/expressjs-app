const {user, Product} = require('../../models/index')

exports.postProduct = async (req, res) => {
    const {name, price, quantity, user_id} = req.body

    await Product.create({
        name: name,
        price: price,
        quantity: quantity,
        user_id: user_id 
    }).then(products => {
        res.status(200).send({
            status: "SUCCESS",
            data: products
        })
    }).catch(err => {
        console.log(err)
        res.status(503).send({
            status: "FAILED",
            message: "Failed for create user to database"
        })
    })
}

exports.getProduct = async (req, res) => {
    try {
        const dbProduct = await Product.findAll()
        res.status(200).send({
            status: "SUCCESS",
            data: dbProduct
        })
    } catch {
        res.status(503).send({
            status: "FAILED",
            message: "Failed for load users table"
        })
    }
}

exports.getProductbyUserId = async (req, res) => {
    const id = req.params.user_id

    const dbProduct = await user.findOne({
        where: {
            id: id
        },
        include: {
            model: Product,
            as: 'products'
        }
    })

    if(!dbProduct) {
        res.status(503).send({
            status: "FAILED",
            message: `user by id '${id}' is not found`
        })
    }

    res.status(200).send({
        status: "SUCCESS",
        data: dbProduct
    })
}