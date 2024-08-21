const {Schema, model} = require('mongoose');
const bcrypt = require("bcryptjs")

const userShema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    surname: {
        type: String,
        required: [true, "Surname is required"]
    },
    email: {
        type: String,
        required: [true, "Emai is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    token : {
        type: String,
        default: null
    },
    verify: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
        required: [true, "Verification token is required"]
    }
}, {versionKey: false, timestamps: true})

userShema.methods.setPassword = function(password){
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userShema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

const User = model('User', userShema);

module.exports = {User};