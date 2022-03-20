require("dotenv").config();
const express = require("express");

const newGameRoute = require("./routes/newGameRoute.js");
const flipTileRoute = require("./routes/flipTileRoute.js");

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
	res.json({ message: "alive" });
});

app.use("/new", newGameRoute);
app.use("/flip", flipTileRoute);

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
