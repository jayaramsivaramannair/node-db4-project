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

router.get("/api/recipes/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const recipe = await Recipes.getRecipeById(id)

        //This will build a unique Array of steps
        console.log(recipe)
        let uniqueArray = []

        for (let i = 0; i < recipe.length; i++) {
            //Checks if the array is empty as duplicate values will not exist in a empty array
            if (!uniqueArray.length) {
                uniqueArray.push({
                    step_id: recipe[i].step_id,
                    step_number: recipe[i].step_number,
                    step_instructions: recipe[i].step_instructions
                })
            } else {
                //Checks if the array already contains the step or not
                const idBool = uniqueArray.some((el) => el.step_id === recipe[i].step_id)
                if (!idBool) {
                    uniqueArray.push({
                        step_id: recipe[i].step_id,
                        step_number: recipe[i].step_number,
                        step_instructions: recipe[i].step_instructions

                    })
                }
            }
        }

        console.log(uniqueArray)



        if (recipe.length > 0) {
            res.status(200).json({
                recipe_id: recipe[0].id,
                recipe_name: recipe[0].recipe_name,
                created_at: recipe[0].created_at,
                steps: [...uniqueArray.map((step) => {
                    const ingredientList = [...recipe.filter((ingredient) => {
                        if (ingredient.step_id === step.step_id) {
                            return ingredient
                        }
                    })]
                    return {
                        step_id: step.step_id,
                        step_number: step.step_number,
                        step_instructions: step.step_instructions,
                        ingredients: [...ingredientList.map((ingredient) => {
                            return {
                                ingredient_id: ingredient.ingredient_id,
                                ingredient_name: ingredient.ingredient_name,
                                quantity: ingredient.quantity,
                            }
                        })]
                    }
                })]
            })
        } else {
            return res.status(404).json({
                message: `Recipe with ID: ${id} does not exist`,
            })
        }

    } catch (err) {
        next(err)
    }
})


module.exports = router