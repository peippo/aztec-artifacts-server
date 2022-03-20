const express = require("express");
const router = express.Router({ mergeParams: true });
const initializeGame = require("../services/initializeGame.js");

router.get("/", function (req, res, next) {
	try {
		res.json(initializeGame());
	} catch (err) {
		console.error(`Error while getting game ID `, err.message);
		next(err);
	}
});

module.exports = router;
