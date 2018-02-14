const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();


app.use(express.static(__dirname + "/client"));

// app.get('/', (req, res) => {
//   res.send("Hello World");
// });

const port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port ", port);
