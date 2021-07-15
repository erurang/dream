import express from "express";
import "express-async-errors";

const router = express.Router();

let tweets = [
  {
    id: "1",
    text: "첫글",
    createdAt: Date.now().toString(),
    name: "erurang",
    username: "erurang",
    url:
      "https://1.bp.blogspot.com/-QtT4QluFRP8/YFBDSVUQlPI/AAAAAAAA65Q/XH2c72y5GUwrozvQHbL23S-hjyC34CDbACNcBGAsYHQ/s0/03.jpg",
  },
  {
    id: "2",
    text: "두번째글",
    createdAt: Date.now().toString(),
    name: "bob",
    username: "bob",
    url:
      "https://1.bp.blogspot.com/-QtT4QluFRP8/YFBDSVUQlPI/AAAAAAAA65Q/XH2c72y5GUwrozvQHbL23S-hjyC34CDbACNcBGAsYHQ/s0/03.jpg",
  },
];

// get /tweets
// get /tweets?username=
router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;

  res.status(200).json(data);
});

// get /tweets/id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = id ? tweets.find((t) => t.id === id) : tweets;

  if (tweet) {
      res.status(200).json(tweet)
  } else {
      res.status(404).json({message: `tweet ${id} is not found`})
  }

});

// post /tweets
router.post('/', (req,res,next) => {

    const {text,name,username} = req.body

    const tweet = {
        id: Date.now().toString(),
        text,
        name,
        username,
        createdAt : new Date(),
    }

    tweets = [tweet,...tweets];
    res.status(201).json(tweet)
})

// put /tweets/:id
router.put("/:id", (req,res,next) => {
    const id = req.params.id;
    const text = req.body.text;
    
    const tweet = tweets.find(t => t.id === id)

    if(tweet) {
        tweet.text = text
        res.status(200).json(tweet)
    } else {
        res.status(404).json({message: `tweet ${id} is not found`})
    }

})

// delete /tweets/:id
router.delete("/:id", (req,res,next) => {
    const id = req.params.id;
    tweets = tweets.filter(t=> t.id !== id)

    res.sendStatus(204)
})



export default router;
