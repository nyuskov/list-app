// backend/index.js
const express = require("express");
const todoItems = require("./todo-items.json");

const PORT = process.env.PORT || 3010;
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/api/todo-items', (req, res) => {
    res.json({data: todoItems});
});