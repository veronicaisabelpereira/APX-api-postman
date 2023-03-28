"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = process.env.PORT || 3002;
app.get("/users", function (req, res) {
    res.json({
        users: [],
    });
});
app.post("/users", function (req, res) {
    res.status(201).json({
        message: "ok",
        id: 1234,
    });
});
app.get("/users/:id/product", function (req, res) {
    res.json({
        products: [],
    });
});
app.listen(port, function () {
    console.log("api corriendo en ", port);
});
