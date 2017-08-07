const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const session = require("express-session");
app.use(
  session({
    secret: "12345",
    resave: false,
    saveUninitialized: true
  })
);

// const session = require("cookie-session");
// app.use(session({
//   name: 'session'
// }))
const exhbs = require("express-handlebars");
const hbs = exhbs.create({ defaultLayout: "main" });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const vikingRoutes = require("./routes");
app.use('/', vikingRoutes);



app.listen(3000, () => {
  console.log("I'm listening");
});
