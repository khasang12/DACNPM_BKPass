const userModel = require('../../models/users');

const getUserDetail = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.userId)
                                    .select("_id image name description numSellingItems numSaledItems averageStarsRate numRate");
        const resultKey = ["image", "name", "description", "numSellingItems", "numSaledItems", "numRate", "averageStarsRate"];
        const result = {};
        resultKey.forEach(key => result[key] = user[key])
        result.id = user._id;
        if (user) {
            res.status(200).send({user: result});
        }
        else {
            res.status(404).send({msg: "user not found"})
        }
    } catch (error) {
        res.status(400).send({err: error})
    }
}
module.exports = getUserDetail;