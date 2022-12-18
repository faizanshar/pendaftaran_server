var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pendaftaran",
  port: "8111",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("berhasil");
});

module.exports = con;
