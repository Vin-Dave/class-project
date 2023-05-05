const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const app = express();

// Ustawienie parsera JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Definicja endpointu do generowania hasła
app.post("/generate-password", (req, res) => {
  const length = req.body.length;
  const password = crypto.randomBytes(length).toString("hex");
  res.send(password);
});

// Serwowanie plików statycznych
app.use(express.static("public"));

// Uruchomienie serwera
app.listen(3000, () => {
  console.log("Serwer uruchomiony na porcie 3000");
});
