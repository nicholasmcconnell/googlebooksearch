const router = require("express").Router();
const booksController = require("../../controllers/booksController");



// router.route("/")
//     .get((req, res) => {
//         console.log("Route hit: root in routes/api/books");
//         res.send("Hello root route in routes/api/books")
//     })

// router.use((req, res) => {
//     console.log("Route hit: catch-all in routes/api/booksRoutes");
//     res.send("Hello catch-all route in routes/api/booksRoutes")
// })

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // .get(booksControllerno.findById)
  // .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
