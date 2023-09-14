const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.STORAG_ENV === "production" ? 5001 : process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})
