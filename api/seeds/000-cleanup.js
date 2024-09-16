exports.seed = async function (knex) {
  await knex("quantity").truncate()
  await knex("ingredients").truncate()
  await knex("steps").truncate()
  await knex("recipes").truncate()
};
