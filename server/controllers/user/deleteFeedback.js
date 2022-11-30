const userModel = require('../../models/users');

const deleteFeedback = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.userId);
        if (!user) {
            res.status(404).send({msg: "user not found"})
        }
        const feedbackId = req.params.feedbackId;
        const author = req.body.author;
        const feedback = user.feedbacks.find(ele => ele._id === feedbackId)
        if (!feedback) {
            res.status(404).send({msg: "feedback not found"})
        }
        if (feedback.authorId !== author._id ) {
            res.status(402).send({msg: "not authorized"})
        }
        const newFeedbacks = user.feedbacks.map(ele => {
            if (ele._id === feedbackId) {
                ele.isDeleted = true;
                return ele;
            }
            else return ele;
        });
        user.feedbacks = newFeedbacks;
        user.numRate = user.numRate - 1;
        const totalRate = user.feedbacks.reduce((total, feedback) => {
            if (feedback.isDeleted) {
                return total;
            }
            else {
                return total + feedback.numStarsRate;
            }
        }, 0)
        user.averageStarsRate = totalRate / user.numRate;
        await user.save();
        res.status(200).send({});
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = deleteFeedback;