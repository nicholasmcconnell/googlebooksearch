const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

// router.use((req, res)=> {
//     console.log("in routes/api/index")
//    res.send("in routes/api/index")
// })

module.exports = router;
