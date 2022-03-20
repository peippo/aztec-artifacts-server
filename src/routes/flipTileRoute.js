const express = require("express");
const router = express.Router({ mergeParams: true });
const flipTile = require("../services/flipTile.js");

router.get("/", (req, res, next) => {
	const query = {
		gameId: req.query.gameId,
		tileId: req.query.tileId,
	};

	try {
		res.json(flipTile(query));
	} catch (err) {
		console.error(`Error while flipping tile `, err.message);
		next(err);
	}
});

module.exports = router;
