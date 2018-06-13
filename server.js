const express = require("express");
const mongoose = require("mongoose");

// routes
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// DB connection
mongoose
  .connect(db)
  .then(() => console.log("Database is connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("I'm gonna do this"));

// routes from the ./api/
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`The server is running in port: ${port}`));
