var env = require("dotenv").config();
var express = require("express");
var { Model } = require("objection");
var Knex = require("knex");
var knexConfig = require("./knexfile");

var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var index = require("./routes/index");

var app = express();

// Initialize Knex
var knex = Knex(knexConfig.development);
Model.knex(knex);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", index);

module.exports = app;
