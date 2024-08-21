const {Entrepreneur} = require('../../models/Entrepreneur');

const getEntrepreneurById = async (req, res) => {
    const {id} = req.params;
    const entrepreneur = await Entrepreneur.findOne({_id: id});
    res.status(200).json({
        status: "Succsess",
        code: 200,
        data: entrepreneur
    })
}

module.exports = getEntrepreneurById;