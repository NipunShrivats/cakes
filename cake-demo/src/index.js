const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
port = 8000;

const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static("public"))//for css file

// for views path
app.set("views", viewsPath);
// "view engine" is fixed
app.set("view engine", "hbs");

// for partials path
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`listening to port no ${port}`);
})