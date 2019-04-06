const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);
router.use((req, res) =>
 res.sendFile(path.join(__dirname, "../client/public/index.html"))
);
module.exports = router;