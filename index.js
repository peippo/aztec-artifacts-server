require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
	res.json({ message: "alive" });
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
