import express from "express";

// https://expressjs.com/en/4x/api.html

const app = express();

app.get("/", (req, res, next) => {
  //   console.log(req.path); // /
  //   console.log(req.headers); // header
  console.log(req.params); // {}
  console.log(req.query); // {}

  res.end("hi");
});

app.get("/params/:id", (req, res, next) => {
  // console.log(req.path); // /params
  // console.log(req.headers); // header
  console.log(req.params); // {id: '내가 url에 친것'}

  console.log(req.params.id); // 변수접근가능

  res.end("hi");
});

app.get("/query", (req, res, next) => {
  // console.log(req.path); // /params
  // console.log(req.headers); // header
  // http://localhost:8080/query?key=zz
  console.log(req.query); // => { key : "zz"}
  console.log(req.query.key); // => zz
  res.end("hi");
});


app.get("/json", (req, res, next) => {
    res.json({name:'zz'})
  });


  app.get("/statuscode", (req, res, next) => {
    res.sendStatus(400)
  });

  app.get("/statuscode2", (req, res, next) => {
    res.status(200).send('ok')
  });


  // network탭 header에서 key : 'value' 확인가능.
  
  app.get("/setheader", (req, res, next) => {
    res.setHeader('key','value')
    res.status(200).end()
  });
app.listen(8080);
