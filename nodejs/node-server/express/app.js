import express from "express";

// https://expressjs.com/en/4x/api.html

const app = express();

app.get(
  "/",
  (req, res, next) => {
    console.log("1");
    // next가 없으면 다음으로 실행이안댐.
    // next() // 1 1-1
    // route 로 지정하면 같은 url에서 아래의 1-1은 실행되지않고 다음(2) 로 넘어감
    // next('route')
    // 에러로 처리하며 맨아래의 use에서 처리댐
    next(new Error('error'))
  },
  (req, res, next) => {
    console.log("1-1");
    // res.send('1-1 over')
    // next() // 1 1-1 2
  }
);

app.get("/", (req, res, next) => {
  console.log("2");
});

// error
app.use((req,res,next) => {
    res.status(404).send('not available')
})

app.use((error,req,res,next) => {
    console.error(error)
    res.status(500).send('sorry try later')
})


app.listen(8080);
