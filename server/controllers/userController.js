const bcrypt = require("bcrypt");
const users = require("../models/users");
const jwt = require("jsonwebtoken")
module.exports.register = async (req, res, next) => {
  try {
    console.log(req.body)
    const { name, email, password, image, gender, phoneNum } = req.body;

    // email
    const emailCheck = await users.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email đã đăng kí", status: false });
    }
    // phoneNum
    const phoneCheck = await users.findOne({ phoneNum });
    if (phoneCheck) {
      return res.json({ msg: "Số điện thoại đã đăng kí", status: false });
    }
    // password
    const hashed = await bcrypt.hash(password, 10);
    // add to DB
    const newUser = await users.create({
      email,
      name,
      image,
      gender,
      phoneNum,
      password: hashed,
    });
    delete newUser.password;
    const token = jwt.sign(
      { user_id: newUser._id, 
        email: newUser.email 
      },
      process.env.JWT_KEY,
      {
        expiresIn: "2h",
      }
    );
    console.log(token);
    newUser.token = token;
    return res.json({ status: true, newUser });
  } catch (ex) {
    console.log(ex);
    next(ex);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await users.findOne({ email })
    if (!user) {
      return res.json({ msg: "Tên đăng nhập hoặc mật khẩu không tồn tại", status: false })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.json({ msg: "Sai mật khẩu. Vui lòng thử lại", status: false })
    }
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.JWT_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    console.log("Logged in")
    console.log(token)
    delete user.password;
    return res.json({ status: true, user })
  }
  catch (ex) {
    next(ex)
  }
}