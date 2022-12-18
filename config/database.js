var mysql = require("mysql");
const Sequelize = require("sequelize");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "pendaftaran",
//   port: "8111",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("berhasil");
// });

const db = new Sequelize(process.env.DB_URI, {
  define: {
    timestamps: false,
  },
});

module.exports = con;
