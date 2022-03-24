const gamesList = require("./games");

const flipTile = (query) => {
	let { gameId, tileId } = query;

	if (!gamesList[gameId]) {
		throw "Game not found!";
	}
	console.log(tileId);
	const isFirst = typeof tileId === "string";
	let revealedTiles = [];
	let isMatch = false;

	if (isFirst) {
		revealedTiles = [
			{ id: parseInt(tileId), symbol: gamesList[gameId]["tiles"][tileId] },
		];
	} else {
		revealedTiles = tileId.map((id) => ({
			id: parseInt(id),
			symbol: gamesList[gameId]["tiles"][id],
		}));
		isMatch = revealedTiles[0]["symbol"] === revealedTiles[1]["symbol"];
	}

	return { revealedTiles, isFirst, isMatch };
};

module.exports = flipTile;
