const db = require("../../api/config.js")

function findAll() {
    return db("recipes as r")
        .join("steps as st", "r.id", "st.recipe_id")
        .select("r.id as recipe_id", "r.recipe_name", "r.created_at", "st.id as step_id", "st.step_number", "st.step_instructions")
}

function getRecipeById(recipe_id) {
    return db("quantity as q")
        .innerJoin("recipes as r", "r.id", "q.recipe_id")
        .leftJoin("steps as st", "st.id", "q.step_id")
        .leftJoin("ingredients as ing", "ing.id", "q.ingredient_id")
        //Matching criteria needs to come from the primary table
        .where('r.id', recipe_id)
        .select(
            "r.*", "st.*", "ing.id as ingredient_id", "ing.ingredient_name", "ing.step_id", "q.quantity"
        )
}

module.exports = {
    findAll,
    getRecipeById,
}