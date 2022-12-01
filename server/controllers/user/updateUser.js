const userModel = require('../../models/users');

const updateUser = async (req, res) => {
    try {
        const changableFields = ["name", "gender", "password", "image", "description"]
        const author = req.body.author;
        const userId = req.params.userId;
        if (String(author._id) !== userId) {
            res.status(403).send({msg: "not authorized"})
        }
        else {
            const user = await userModel.findById(userId).select("_id");
            if (!user) {
                res.status(404).send({msg: "user not found"})
            }
            else {
                const newInfo = req.body.user;
                changableFields.forEach(fieldName => {
                    if (newInfo[fieldName]) {
                        user[fieldName] = newInfo[fieldName];
                    }
                })
                const updatedUser = await user.save();
                res.status(200).send({user: updatedUser})
            }
        }
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = updateUser