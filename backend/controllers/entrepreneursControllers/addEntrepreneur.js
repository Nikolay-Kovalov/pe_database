const {Entrepreneur} = require('../../models/Entrepreneur');

const addEntrepreneur = async (req, res) => {
const entrepreneur = await Entrepreneur.create(req.body);
res.status(201).json({
    status: "Success",
    code: 201,
    data: entrepreneur
})
}

module.exports = addEntrepreneur;
