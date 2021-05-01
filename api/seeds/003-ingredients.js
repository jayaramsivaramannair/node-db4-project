exports.seed = async function (knex) {
  await knex("ingredients").insert([
    { ingredient_name: "White Sugar", step_id: 1 },
    { ingredient_name: "Flour", step_id: 1 },
    { ingredient_name: "Butter", step_id: 2 },
    { ingredient_name: "Olive Oil", step_id: 3 },
    { ingredient_name: "Chicken", step_id: 4 },
    { ingredient_name: "Carrots", step_id: 4 },
    { ingredient_name: "Celery", step_id: 4 },
    { ingredient_name: "Olive Oil", step_id: 5 },
    { ingredient_name: "Halloumi Cheese", step_id: 6 },

  ])
};
