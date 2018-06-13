const express = require("express");
const router = express.Router();

// @Route GET /api/users/test
// @desc tests users route
// @access public

router.get("/test", (req, res) => res.json({ msg: "User found" }));

module.exports = router;
