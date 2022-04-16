const {Product, user} = require('../models/index')
const ProductController = require('../src/controllers/product.controller')
const UserController = require('../src/controllers/user.controller')
const httpMocks = require('node-mocks-http')

jest.mock('../models/index')

let req, res, next

beforeEach(() => {
    req = httpMocks.createRequest()
    req.headers["auth"]
    res = httpMocks.createResponse()
})
describe('ProductController.postProduct', () => {
    it('should return 200', async () => {
        Product.create.mockResolvedValue({
            name: 'hello'
        })
        await ProductController.postProduct(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return error', async () => {
        const errData = {
            status: "FAILED",
            message: "Failed for add product to database"
        }

        const rejected = Promise.reject(errData)

        Product.create.mockResolvedValue(rejected)
        await ProductController.postProduct(req, res)
        expect(res.statusCode).toBe(503)
    })
})

beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
})
describe('UserController.postSignIn', () => {
    it('should return 200', async () => {
        user.findOne.mockResolvedValue({
            email: 'hello@world.net'
        })
        UserController.postSignIn(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return error', async () => {
        const errData = {
            status: "FAILED",
            message: "Failed for add product to database"
        }

        const rejected = Promise.reject(errData)

        user.findOne.mockResolvedValue(rejected)
        await UserController.postSignIn(req, res)
        expect(res.statusCode).toBe(503)
    })
})

beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
})
describe('UserController.getUser', () => {
    it('should return 200', async () => {
        user.findAll.mockResolvedValue()
        UserController.getUser(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return error', async () => {
        const errData = {
            status: "FAILED",
            message: "Failed for load users table"
        }

        const rejected = Promise.reject(errData)

        user.findAll.mockResolvedValue(rejected)
        await UserController.getUser(req, res)
        expect(res.statusCode).toBe(503)
    })
})

beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
})
describe('ProductController.getProduct', () => {
    it('should return 200', async () => {
        Product.findAll.mockResolvedValue()
        ProductController.getProduct(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return error', async () => {
        const errData = {
            status: "FAILED",
            message: "Failed for load users table"
        }

        const rejected = Promise.reject(errData)

        Product.findAll.mockResolvedValue(rejected)
        await ProductController.getProduct(req, res)
        expect(res.statusCode).toBe(503)
    })
})