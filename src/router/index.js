const express = require("express");
const router = express.Router();
const db = require("../../config/database");

router.get("/data", (req, res) => {
  var sql = "SELECT * FROM mahasiswa";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: "berhasil",
      data: result,
    });
  });
});

router.post("/data", (req, res) => {
  const nama = req.body.nama;
  const tempat_lahir = req.body.tempat_lahir;
  const tanggal_lahir = req.body.tanggal_lahir;
  const jenis_kelamin = req.body.jenis_kelamin;
  const alamat = req.body.alamat;
  const email = req.body.email;
  const no_hp = req.body.no_hp;
  var sql =
    "INSERT INTO mahasiswa (nama,tempat_lahir,tanggal_lahir,jenis_kelamin,alamat,email,no_hp) VALUES ('" +
    nama +
    "','" +
    tempat_lahir +
    "','" +
    tanggal_lahir +
    "','" +
    jenis_kelamin +
    "','" +
    alamat +
    "','" +
    email +
    "','" +
    no_hp +
    "')";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: "berhasil tambah data",
    });
  });
});

module.exports = router;
