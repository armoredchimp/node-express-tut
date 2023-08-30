const express = require("express");
const app = express();
const logger = require("./logger");
// req => middleware => res

app.use("/api", logger);
// the /api means it applies no matter what after /api
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("About");
});
app.get("/api/items", (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Moo!");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
