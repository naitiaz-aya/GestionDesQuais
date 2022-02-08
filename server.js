// Mongoose est un outil de modélisation d'objets MongoDB 
// conçu pour fonctionner dans un environnement asynchrone. 
const mongoose = require("mongoose");
// Middleware de l'enregistreur de requêtes HTTP pour node.js
const morgan = require("morgan")
// Dotenv est un module sans dépendance qui charge des variables 
// d'environnement à partir d'un .envfichier dans process.env
const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
}); 

const app = require("./app");

app.use(morgan("common"))
const database="mongodb://localhost:27017/tangermed"
// Connect the database
mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("MongoDB Connected Successfully");
  });

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});

