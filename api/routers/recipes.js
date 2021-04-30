const express = require("express")
const Recipes = require("../models/recipes");

const router = express.Router()

router.get("/api/recipes", async (req, res, next) => {
    try {
        const recipes = await Recipes.findAll()
        res.json(recipes)
    } catch (err) {
        next(err)
    }
})


module.exports = router