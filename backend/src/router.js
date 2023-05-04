const express = require("express");

const router = express.Router();

const connection = require("./database");

connection
  .getConnection()
  .then(() => {
    console.info("Can reach database");
  })
  .catch((err) => {
    console.error(err);
  });

router.get("/superheroes", (req, res) => {
  let url = "SELECT * FROM superhero";
  const value = [];

  if (req.query.name) {
    url += " WHERE name LIKE ?";
    value.push(`${req.query.name}%`);
  }

  connection
    .query(url, value)
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
});

router.get("/superheroes/:id", (req, res) => {
  const { id } = req.params;
  connection
    .query("SELECT * FROM superhero WHERE id = ? ", [id])
    .then(([results]) => {
      if (results.length) {
        res.json(results[0]);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
});

router.get("/categories/", (req, res) => {
  connection
    .query(`SELECT DISTINCT ${req.query.type} FROM superhero`)
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
});

router.get("/basket", (req, res) => {
  const list = req.query.list.split(",");

  connection
    .query(`SELECT * FROM superhero WHERE id in ( ? ) `, [list])
    .then(([results]) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
});
module.exports = router;
