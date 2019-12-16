const express = require("express");
const app = express();
const data = require("./reviews");
const cors = require('cors');
const PORT = 5000;

app.use(cors());

app.get("/reviews", (req, res) => res.json(data));

app.listen(PORT, () => console.log(`Review service listening on port ${PORT}`));
