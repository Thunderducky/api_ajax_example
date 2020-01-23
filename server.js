const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();
const todos = [
    {
        text: "walk the dog",
        done: false,
    },
    {
        text: "wash the car",
        done: true,
    }
];
app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.get("/api/todos", (req, res) => {
    res.json(todos);
})

app.post("/api/todos", (req, res) => {
    todos.push(req.body);
    res.send(200);
})

app.listen(PORT, () => {
    console.log("Server started at http://localhost:"+PORT);
})