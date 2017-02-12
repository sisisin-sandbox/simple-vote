const base = {
  dialect: 'postgres'
};

module.exports = {
  "development": Object.assign({}, base, {
    "username": "local",
    "password": null,
    "database": "simple_vote_development",
    "host": "127.0.0.1",
  }),
  "test": Object.assign({}, base, {
    "username": "local",
    "password": null,
    "database": "simple_vote_test",
    "host": "127.0.0.1",
    logging: () => { },
  }),
  "production": Object.assign({}, base, {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  })
}
