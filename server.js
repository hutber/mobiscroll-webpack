import express from "express";
import path from "path";
import compression from "compression";
import React from "react";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";

var app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'dist')))

var PORT = process.env.PORT || 6002
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
