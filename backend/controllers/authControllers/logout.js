const {User} = require('./../../models/User');

const logout = async (req,res) => {
    const {_id} = req.user;

    await User.findByIdAndUpdate(_id, {token: null})

    res.cookie('jwt', "", {maxAge: 0})

    res.status(200).json({message: "Logged out successfully"});

}

module.exports = logout;