const {User} = require("./../../models/User");
const HTTPError = require('./../../helpers/HTTPErrors');
const jwt = require('jsonwebtoken');
const generateTokenAndSetCookie = require("../../helpers/generateToken");

const {SECRET_KEY} = process.env;

const login = async (req, res) => {
const {email, password} = req.body;

const user = await User.findOne({email});



if(!user ||
    //  !user.verify ||
      !user.checkPassword(password)){
  
    throw HTTPError(401, "Incorrect password or email")
}

// const payload = user;

// const token = jwt.sign(payload.toObject(), SECRET_KEY, {expiresIn: "12h"});
const token = await generateTokenAndSetCookie(user._id, res);
console.log(token)

await User.findByIdAndUpdate(user._id, {token})

// generateTokenAndSetCookie(user._id, res)

res.status(200).json({
    status: "Success",
    code: 200,
    data: {
        token,
        user
    }
})

}



module.exports = login;