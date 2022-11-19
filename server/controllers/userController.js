const bcrypt = require("bcrypt");
const users = require("../models/users");

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
    const user = await users.create({
      email,
      name,
      image,
      gender,
      phoneNum,
      password: hashed,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.login = async (req, res, next) => {
  try{
      const {username, password} = req.body
      const user = await users.findOne({username})
      if(!user){
          return res.json({msg:"Tên đăng nhập hoặc mật khẩu không tồn tại", status: false})
      }
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if(!isPasswordValid){
          return res.json({msg:"Tên đăng nhập hoặc mật khẩu không tồn tại", status: false})
      }
      delete user.password
      return res.json({status: true, user})
  }
  catch(ex){
      next(ex)
  }
}