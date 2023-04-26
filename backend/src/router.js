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

// const itemControllers = require("./controllers/itemControllers");
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
