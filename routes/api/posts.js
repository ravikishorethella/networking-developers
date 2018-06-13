const express = require("express");
const router = express.Router();

// @Route GET /api/posts/test
// @desc get posts route
// @access public
router.get("/test", (req, res) => res.json({ msg: "post found" }));

module.exports = router;
