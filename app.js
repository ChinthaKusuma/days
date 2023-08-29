const express = require("express");
const app=express();

const addDays = require("date-fns/addDays");


app.get("/", (request, response) => {
  const date1 = new Date();

  let day2 = addDays(date1, 100);
  response.send(
    `${day2.getDate()}/${day2.getMonth() + 1}/${day2.getFullYear()}`
  );
  module.exports=app;
