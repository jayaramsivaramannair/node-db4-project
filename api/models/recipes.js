const db = require("../../api/config.js")

function findAll() {
    return db("recipes as r")
        .join("steps as st", "r.id", "st.recipe_id")
        .select("r.*", "st.id", "st.step_instructions")
}

function getRecipeById(recipe_id) {

}

module.exports = {
    findAll,
    getRecipeById,
}