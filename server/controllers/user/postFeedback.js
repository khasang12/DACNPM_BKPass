const userModel = require('../../models/users');

const postFeedback = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.userId);
        if (!user) {
            res.status(404).send({msg: "user not found"})
        }
        const author = req.body.author;
        const createAt = new Date();
        const feedback = {
            authorId : author._id,
            content : req.body.feedback,
            numStarsRate : req.body.numStarsRate,
            createAt : createAt
        }
        user.feedbacks.push(feedback);
        user.numRate = user.numRate + 1;
        const totalRate = user.feedbacks.reduce((total, feedback) => {
            if (feedback.isDeleted) {
                return total;
            }
            else {
                return total + feedback.numStarsRate;
            }
        }, 0)
        user.averageStarsRate = totalRate / user.numRate
        await user.save();
        res.status(200).send({feedback: feedback})
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = postFeedback;