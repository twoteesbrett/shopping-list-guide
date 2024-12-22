const express = require("express");

const port = 3000;
const app = express();

// GET hello
app.get("/api", (req, res) => {
    res.send("Hello, world!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});