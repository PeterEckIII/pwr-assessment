const express = require("express");
const app = express();
const data = require("./reviews");
const PORT = 5000;

app.get("/reviews", (req, res) => res.json(data));

app.listen(PORT, () => console.log(`Review service listening on port ${PORT}`));
