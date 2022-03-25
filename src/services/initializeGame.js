const { v4: uuidv4 } = require("uuid");
const shuffleArray = require("../utils/utils");
const gamesList = require("./games");

const tiles = [
	"A",
	"A",
	"B",
	"B",
	"C",
	"C",
	"D",
	"D",
	"E",
	"E",
	"F",
	"F",
	"G",
	"G",
];

const initializeGame = () => {
	const id = uuidv4();
	gamesList[id] = {};
	gamesList[id]["tiles"] = shuffleArray(tiles);
	gamesList[id]["turn"] = 1;

	return { id: id, turn: 1 };
};

module.exports = initializeGame;
