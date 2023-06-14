import express, { Application } from "express";

import dotenv from "dotenv";
import http from "http";
import next from "next";

// set env file
dotenv.config();

// express app
const app: Application = express();
const server = http.createServer(app);

// next app
const nextApp = next({
  dev: process.env.ENVIROMENT === "DEVELOPMENT" ?? false,
});

app.use(<any>nextApp.getRequestHandler());
app.use(<any>nextApp.getUpgradeHandler());

nextApp.prepare().then(function () {
  server.listen(process.env.PORT, function () {
    console.log("server running");
  });
});
