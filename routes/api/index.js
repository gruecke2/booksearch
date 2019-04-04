const router = require("express").Router();
const bookRoutes = require("./books");

router.use((req, res) =>
 res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// Book routes
router.use("/books", bookRoutes);

module.exports = router;