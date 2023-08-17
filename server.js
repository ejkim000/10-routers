const express = require("express");
const path = require("path");
const app = express();
const PORT = 3005;

const favoritFoods = [
  "Galic Soy Fried Chicken",
  "Spicy rice cake",
  "Korean BBQ",
  "Latte",
  "Bukdak Sauce"
];
const feelings = [
  "Happy",
  "Delight",
  "Joyful",
  "Peaceful",
  "Stressed Out",
  "Need Some Rest",
  "Sad",
  "No Feeling",
  "My Feeling Has A Feeling",
];

app.get("/", (req, res) => {
  res.send(`
    <h1>Hi there!</h1>
    <h1>Welcome to EJ's routes!</h1>
    <p>Do you want to know <a href="/about-me">about me</a>?</p>
    `);
});

app.get("/about-me", (req, res) => {
  res.send(`
    <h1>About Me</h1>
    <p>Hi, my name is Eunjung, please call me EJ.</p>
    <p>Living in NJ, but I get to know NJ has Safari today 😯</p>
    <p>If you want to know about me more please click <a href="/about-me/hometown">here</a>!</p>
    `);
});

app.get("/about-me/hometown", (req, res) => {
  res.send(`
    <h1>South Korea</h1>
    <p>I was born in South Korea 🌏<br/>
    However, I was in the Universe🌌 before.</p>
    <p>South Korea has beautiful four different seasons everywhere and many nice places to visit.</p>
    <p>But please don't visit South Korea in winter time.</p>
    <p>Curruntly, I'm studying <a href="/study/express">Express</a>.</p>
    `);
});

app.get("/study/express", (req, res) => {
  res.send(`
    <h1>Welcome to Express</h1>
    <p>I'm trying to understand whst is <a hred="https://expressjs.com/">Express</a></p>
    <p>Still I'm on the process of understanding.</p>
    <p>I learned params and <a href="/study?subject=query">query</a> today.</p>
    `);
});

app.get("/study", (req, res) => {
  res.send(`
        <h1>Welcome to Express part 2</h1>
        <p><b>${req.query.subject}</b> : This is subject query value that is in the link.</p>
        <p>Do you know <a href="/study/react">react</a>?</p>
        `);
});

app.get("/study/react", (req, res) => {
  res.send(`
    <h1>Welcome to React</h1>
    <p>I like React because I like front-end than back-end.</p>
    <p>I get exited when I create something from nothing.</p>
    <p>Oh! Did I tell you what is <a href="/about-me/food">my favorite food</a>?</p>
    `);
});

app.get("/about-me/food", (req, res) => {
  const foods = favoritFoods.toString(", ");

  res.send(`
      <h1>My Favorit Foods</h1>
      <p>${foods}, and etc.</p>
      <p>Among them, the best favorite food is <a href="/about-me/food/0">this</a>!</p>
      `);
});

app.get("/about-me/food/:id", (req, res) => {
  res.send(`
      <h1>My Best Food</h1>
      <p>MY best favorite food is <b>${
        favoritFoods[req.params.id]
      }</b></p>
      <p>I'm going to eat ${
        favoritFoods[req.params.id]
      } tonight, <b>${new Date().toLocaleDateString()}</b></p>
      <p>I hope we can eat this together someday.</p>
      <p><a href="/feel">How do you feel today?</a></p>
      `);
});

app.get("/feel", (req, res) => {
  const idx = Math.floor(Math.random() * feelings.length);
  let feel = "Get some rest, tomorrow will be a better day!";
  if (idx < 4) {
    feel = "Great! Same here!";
  }
  res.send(`
    <h1>You feel <span style="color:orange">${feelings[idx]}</span> today!</h1>
    <p>${feel}</p>
    <p>You can refresh the webpage when your feeling is changed.</p>
    <p><a href="/bye">Please Click Here!</a></p>
    `);
});

app.get("/bye", (req, res) => {
  res.send(`
    <h1>Thank you and Bye!</h1>
    <p>Go Back to <a href="/">homepage</a></p>
    `);
});

app.listen(PORT, () => {
  console.log("App is listining on port" + PORT);
});
