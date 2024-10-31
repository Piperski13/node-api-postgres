const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const recordRouter = require("./routes/recordRoutes.js");
const loginRouter = require("./routes/loginRoutes.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./View/index.html"));
});

app.use("/records", recordRouter);

app.use("/login", loginRouter);

// setupLoginRoute(app);

module.exports = app;
