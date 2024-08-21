const {User} = require('./../../models/User');
// const sendEmail = require('./../../helpers/sendEmail')
const {v4: uuidv4} = require('uuid')

const signUp = async (req, res, next) => {
try{
const {name, surname, email, password} = req.body;
console.log(req.body)
const user = await User.findOne({email})
if(user){
    res.status(409).json({message: "This email is already exist"})
}
const verificationToken = uuidv4();
const newUser = new User({name, surname, email, verificationToken})
if(password){
    newUser.setPassword(password)
}
await newUser.save();
// const mail = {
//     to: email,
//     subjec: "Email verification",
//     html: `<a target="_blank" href="http://localhost:8888/api/users/verify/${verificationToken}">Confirm your email</a>`
// }

// await sendEmail(mail)

res.status(201).json({
    status: "Success",
    code: 201,
    data: {
        name,
        surname,
        email,
        verificationToken
    }
})
}

catch(error){
next(error)
}
}

module.exports = signUp;