
exports.up = async function (knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("recipe_name").notNull().unique()
        table.date("created_at").notNull().defaultTo(knex.raw("current_timestamp"))
    })

    await knex.schema.createTable('steps', (table) => {
        table.increments("id")
        table.integer("step_number").notNull()
        table.text("step_instructions").notNull()
        //Below is a foreign key referring to the ID in recipes table
        table.integer("recipe_id").references("id").inTable("recipes").onDelete("CASCADE")
    })

    await knex.schema.createTable('ingredients', (table) => {
        table.increments("id")
        table.text("ingredient_name")
        //Below is a foreign key referring to the ID in steps table
        table.integer("step_id").references("id").inTable("steps").onDelete("CASCADE")
    })

    await knex.schema.createTable('quantity', (table) => {
        table.increments("id")
        table.float("quantity").notNull()
        table.integer("recipe_id").references("id").inTable("recipes").onDelete("CASCADE")
        table.integer("step_id").references("id").inTable("steps").onDelete("CASCADE")
        table.integer("ingredient_id").references("id").inTable("ingredients").onDelete("CASCADE")
    })

};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("quantity")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("recipes")

};
