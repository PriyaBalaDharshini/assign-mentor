import express from 'express'

const route = express.Router()
route.use("/", (req, res) => {
    res.status(200).send({
        message: "Welcome to backend"
    })
})

export default route

