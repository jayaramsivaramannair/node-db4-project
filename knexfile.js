// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: "./api/recipes.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./api/migrations",
    },
    seeds: {
      directory: "./api/seeds",
    },

    //This is required when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done)
      },
    },

  },

};
