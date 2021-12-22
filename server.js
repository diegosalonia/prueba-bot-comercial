const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

// for parsing json
app.use(
  bodyParser.json({
    limit: "20mb",
  })
);

mongoose.connect(
  'mongodb+srv://diegosalonia:4375@cluster0.nrpfo.mongodb.net/chatbotDB?retryWrites=true&w=majority', 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  },
  (err, res) => {
      if(err) return console.log("Hubo un error en la base de datos", err);
      console.log("BASE DE DATOS ONLINE");
});

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "20mb",
  })
);

app.use("/messenger", require("./Facebook/facebookBot"));

app.get("/", (req, res) => {
  return res.send("Chatbot Funcionando 🤖🤖🤖");
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
