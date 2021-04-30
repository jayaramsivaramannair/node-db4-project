const express = require("express")
const recipesRouter = require("./api/routers/recipes.js")

const server = express()
server.use(express.json())

server.use(recipesRouter)

server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: "Something went wrong",
    })
})

module.exports = server