exports.seed = async function (knex) {
  await knex("quantity").insert([
    { recipe_id: 1, ingredient_id: 1, step_id: 1, quantity: 0.75 },
    { recipe_id: 1, ingredient_id: 2, step_id: 1, quantity: 0.75 },
    { recipe_id: 1, ingredient_id: 3, step_id: 2, quantity: 0.75 },
    { recipe_id: 2, ingredient_id: 4, step_id: 3, quantity: 0.25 },
    { recipe_id: 2, ingredient_id: 5, step_id: 4, quantity: 0.50 },
    { recipe_id: 2, ingredient_id: 6, step_id: 4, quantity: 0.50 },
    { recipe_id: 2, ingredient_id: 7, step_id: 4, quantity: 0.50 },
    { recipe_id: 3, ingredient_id: 8, step_id: 5, quantity: 0.25 },
    { recipe_id: 3, ingredient_id: 9, step_id: 6, quantity: 0.25 },
  ])
};
