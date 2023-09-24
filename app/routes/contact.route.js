const express = require("express");
const contacts = require("../controllers/contact.controllers");

const router = express.Router();

router
  .route("/")
  .get(contacts.findAll)
  .post(contacts.create)
  .delete(contacts.deleteAll);

router.route("/favorite").get(contacts.findAllFavorite);
router.route("/create").get(contacts.create);
router.route("/update").get(contacts.update);
router.route("/delete").get(contacts.delete);
router.route("/deleteAll").get(contacts.deleteAll);

router
  .route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.delete);

module.exports = router;
