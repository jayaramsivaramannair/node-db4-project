exports.seed = async function (knex) {
  await knex("steps").insert([
    { step_number: 1, step_instructions: "Whisk together flour, white sugar and salt", recipe_id: 1 },
    { step_number: 2, step_instructions: "Stir with melted butter and flour until lumpy batter", recipe_id: 1 },
    { step_number: 1, step_instructions: "Preheat Oven to 425 degrees", recipe_id: 2 },
    { step_number: 2, step_instructions: "Add Chicken, Carrots, Peas and Celery to Water and Boil", recipe_id: 2 },
    { step_number: 1, step_instructions: "Heat Olive Oil in a Skillet", recipe_id: 3 },
    { step_number: 2, step_instructions: "Add Haloumi Sticks and Cook Until Brown", recipe_id: 3 },
  ])
};
