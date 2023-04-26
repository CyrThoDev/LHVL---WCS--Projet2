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

router.get("/", (req, res) => {
  res.status(200);
});

router.get("/superhero", (req, res) => {
  connection
    .query("SELECT * FROM superhero")
    .then(([results]) => {
      res.json(results);
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
