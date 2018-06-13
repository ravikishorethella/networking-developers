const express = require("express");
const router = express.Router();

// @Route GET /api/profile/test
// @desc tests profile route
// @access public

router.get("/test", (req, res) => res.json({ msg: "Profile found" }));

module.exports = router;
