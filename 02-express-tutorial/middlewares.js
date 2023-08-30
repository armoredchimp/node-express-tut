const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");
// req => middleware => res
app.use(express.static("./public"));
// app.use([logger, authorize]);
// the /api means it applies no matter what after /api
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("About");
});
app.get("/api/items", [logger, authorize], (req, res) => {
  res.send("About");
});
