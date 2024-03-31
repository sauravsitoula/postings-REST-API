const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "postings",
});

// mysqlPool.query("SELECT 1").then((data) => console.log(data));

module.exports = mysqlPool;
