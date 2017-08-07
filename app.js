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

let sess;

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/login", (req, res) => {
  sess = req.session;
  sess.username = req.body.username;

  res.redirect("/profile");
});

// app.post('/profile', (req, res)=> {
//   sess = req.session;
//   sess.username = req.body.username;
//
//
// })

app.post("/newprofile", (req, res) => {
  sess = req.session;
  sess.username = req.body.username;
  sess.email = req.body.email;
  res.render("profileForm");
});

app.post("/profileCreate", (req, res) => {
  sess = req.session;
  sess.username = req.body.username;
  sess.email = req.body.email;
  console.log(sess.email);
  console.log(sess.username);
  console.log(req.body);
  res.end("test");
});

app.listen(3000, () => {
  console.log("I'm listening");
});
