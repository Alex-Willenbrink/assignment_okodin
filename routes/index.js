const express = require("express");
const router = express.Router();
const models = require("./../models");

let {
  User,
  Profile
} = models;
const sequelize = models.sequelize;

let sess;

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/login", (req, res) => {
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

router.post("/newprofile", (req, res) => {
  sess = req.session;
  sess.username = req.body.username;
  sess.email = req.body.email;
  res.render("profileForm");
});

router.post("/profileCreate", (req, res) => {
  sess = req.session;
  sess.username = req.body.username;
  sess.email = req.body.email;

  let username;
  let email;
  let fname;
  let lname;
  let gender;
  let city;
  let age;
  let distance;
  let occupation;
  let education;
  let children;
  let mStatus;

  let userParams = {
    username: sess.username,
    email: sess.email
  }

  profile = req.body.profiles;
  let profileParams = {
    fname: profiles.fname,
    lname: profiles.lname,
    gender: profiles.gender,
    city: profiles.city,
    age: profiles.age,
    distance: profiles.distance,
    occupation: profiles.occupation,
    education: profiles.education,
    children: profiles.children,
    mstatus: profiles.mstatus
  }

  sequelize.transacction((t) => {

  })


  console.log(sess.email);
  console.log(sess.username);
  console.log(req.body);
  res.end("test");
});

module.exports = router;