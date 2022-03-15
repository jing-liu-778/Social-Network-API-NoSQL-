const express = require("express");
const db = require("./config/connection");
// const mongoose = require("mongoose");
const routes = require("./routes");

// const cwd = process.cwd();

const app = express();
const PORT = process.env.PORT || 3001;

// const activity = cwd.includes('01-Activities')
//   ? cwd.split('/01-Activities/')[1]
//   : cwd;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.use(routes);

// // tells mongoose which database to connect to
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/social-network-api",
//   {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// Use this to log mongo queries being executed!
// mongoose.set("debug", true);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server  running on port ${PORT}!`);
  });
});
