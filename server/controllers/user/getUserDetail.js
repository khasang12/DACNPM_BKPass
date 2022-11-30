const userModel = require('../../models/users');

const getUserDetail = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.userId)
                                    .select("_id image name description numSellingItems numSaledItems rate numFeedback");
        if (user) {
            res.status(200).send({user: user});
        }
        else {
            res.status(404).send({msg: "user not found"})
        }
    } catch (error) {
        res.status(400).send({err: error})
    }
}
module.exports = getUserDetail;