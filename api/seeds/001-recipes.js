
exports.seed = async function (knex) {
  await knex("recipes").insert([
    { recipe_name: "Belgian Banana Waffles", created_at: "2021-03-29" },
    { recipe_name: "Chicken Pot Pie", created_at: "2021-02-15" },
    { recipe_name: "Halloumi Cheese Fingers", created_at: "2021-04-15" },
  ])
};
