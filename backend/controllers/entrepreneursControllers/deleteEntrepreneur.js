const {Entrepreneur} = require('../../models/Entrepreneur');

const deleteEntrepreneur = async (req, res) => {
const {id} = req.params;
const deletedEntrepreneur = await Entrepreneur.findByIdAndDelete(id);
res.status(200).json({
    status: "Success",
    code: 200,
    data: deletedEntrepreneur
})
}

module.exports = deleteEntrepreneur;