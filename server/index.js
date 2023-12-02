

const express = require("express");
const session = require('express-session');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGO_URL, PORT } = process.env;


const myModule = require("../pulsModule/module/my-module.cjs");
//import myModule from "../pulsModule/module/my-module";

const router = require('express').Router()
//const axios = require("axios");
//const { useCookies } = require("react-cookie");
//import React from 'react';
//const {useState} = require("react");
//

async function loadModule() {
 // const x = await import ('react-cookie');
  
  return await import ('react-cookie');
};
async function loadModule2() {
  return await import('react-cookie').then(myModule => {
    return myModule;
  });
};



mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));
  
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


app.use(cookieParser());


/*
app.get('/profile', (req, res) => {
  const module = loadModule2();
 
  const [cookies, removeCookie] = module.useCookies([]);
  const [username, setUsername] = useState("");
  
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      /*setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  
  
});*/

app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  const sessionData = req.session;
  // Use session data here...
});
app.get('/session', (req, res) => {
  const reqData = JSON.stringify(req.session);
  res.send(reqData);
});

app.use(express.json());

app.use("/", authRoute);

app.use(express.static(__dirname));

app.get("/*", function(req, res) {

  req.session.resave = true;
  res.sendFile("C:\Users\vanes\Uni\COMP 307\PROJECT\PULS-website\README.md");
});