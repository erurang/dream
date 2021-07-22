import express from "express";
import { body, validationResult } from "express-validator";

const app = express();

// body-parser를 적용했는데도 post로 요청을 날렸을때 req.body에 {}가 리턴되엇다.
// 왠지싶어서 header에 content-type / application/json으로 지정해줫더니 제대로 됬다.
// 먼지는 공부해야할듯
app.use(express.json());

app.post(
  "/users",
  [body("name")
    .notEmpty()
    .withMessage("이름을 입력하세요")
    .isLength({ min: 2, max: 10 })
    .withMessage("이름은 두글자이상 10글자 이하"),
  body("age").notEmpty().isInt().withMessage("숫자를 입력해"),
body("email").isEmail().withMessage("이메일을 입력해"),
body("job.name").notEmpty().withMessage('직업을 입력해')

],
  (req, res, next) => {
    // 만약 Post요청으로 들어왔을때 유효성검사를 할때
    // 만약이메일이 형식이 틀리면 우리는 아래처럼 하나하나 해줘야한다
    // 이런걸 해주기위해 express에는 express-validator를 제공한다
    // npm i express-validator
    // if (req.body.email ...) {
    //     res.statue(400).send({message:'email.. not...'})
    // }
    // 라이브러리를 이용해 아래처럼 사용가능
    // 포스트요청이왓을때 바디안에 name의 길이가 2~10인지 체크하라~
    // body('name').isLength({min:2,max:10})

    //그후 우리는 error가 있는지 없는지만 체크하면됨.
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ message: errors.array() });

    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get("/:email", (req, res, next) => {
  return res.send("@");
});

app.listen(8000);
