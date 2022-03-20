const gamesList = require("./games");

const flipTile = (query) => {
	let { gameId, tileId } = query;

	const isFirst = typeof tileId === "string";
	let revealedTiles = [];
	let isMatch = false;

	if (isFirst) {
		revealedTiles = [gamesList[gameId]["tiles"][tileId], undefined];
	} else {
		revealedTiles = tileId.map((id) => gamesList[gameId]["tiles"][id]);
		isMatch = revealedTiles[0] === revealedTiles[1];
	}

	return { revealedTiles, isFirst, isMatch };
};

module.exports = flipTile;
