const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");
const auth = require("../middleware/auth");

router.post("/", auth, booksController.addBook);
router.put("/:id", auth, booksController.updateBook);
router.delete("/:id", auth, booksController.deleteBook);
router.get("/", booksController.getBooks); // Public

module.exports = router;
