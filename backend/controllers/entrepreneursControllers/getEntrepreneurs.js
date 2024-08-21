const {Entrepreneur} = require('../../models/Entrepreneur');

const getEntrepreneur =  async (req, res) => {
const entrepreneurs = await Entrepreneur.find();
res.status(200).json({
    status: "Succsess",
    code: 200,
    data: entrepreneurs
})
}





module.exports = getEntrepreneur;