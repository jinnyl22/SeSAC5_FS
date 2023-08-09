/**
 * sample rest API 만들기
 */

const express = require("express");
const app = express();

// import http from "http"; // ESM 방식
const http = require("http"); // CJS 방식

const server = http.createServer((req, res) => {
  res.write("Hello, Node!");
  res.end();
});

// console.log("xxx");

server.listen(80, () => console.log("Server Started at 80"));

app.get("/api/v1.0/emps", async (req, res, next) => {
  // console.log('query>>>', req.query);
  const { query } = req;
  try {
    const fn = query ? db.finds : db.gets;
    // const data = await fn.bind(db)('Emp', query);
    const data = await fn.call(db, "Emp", query);
    // console.log('🚀  data:', data);
    res.send(data);
  } catch (error) {
    res.status(500).send({ errorCode: 500, errorMessage: error.message });
  }
});

app.get("/api/v1.0/emps/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await db.get("Emp", id);
    res.send(data);
  } catch (error) {
    res.status(500).send({ errorCode: 500, errorMessage: error.message });
  }
});

app.listen(8088, () => console.log("Server started at 8088..."));
