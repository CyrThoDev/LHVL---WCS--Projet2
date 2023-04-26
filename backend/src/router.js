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
  // SELECT * FROM superhero WHERE name LIKE '%A%';
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

// const itemControllers = require("./controllers/itemControllers");
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
