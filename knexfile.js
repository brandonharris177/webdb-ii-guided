// Update with your config settings.

module.exports = {

  development: {
    // client -> db driver
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3', //updated
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  //defining configuration for knex to connect to production
  production: {
    client: 'pg', //changed to use pg and installed pg
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
