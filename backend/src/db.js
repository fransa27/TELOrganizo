const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.port,
  database: db.database,

  //user: "postgres",
  //password: "fifasoccer12",
  //host: "localhost",
  //port: 5432,
  //database: "proyectoTEL335",
});

module.exports = pool;