require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
const PORT = 8001;

app.use(express.json());
app.use(cors());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});