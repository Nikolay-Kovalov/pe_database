const {Entrepreneur} = require('../../models/Entrepreneur');

const updateEntrepreneurById = async (req, res) => {
    const {id} = req.params;
   const  updatedEntrepreneure = await Entrepreneur.findByIdAndUpdate(id, req.body, {new: true});
   console.log(id)
   console.log(req.body)
   res.status(200).json({
    status: "Success",
    code: 200,
    data: updatedEntrepreneure
   })
}

module.exports = updateEntrepreneurById;