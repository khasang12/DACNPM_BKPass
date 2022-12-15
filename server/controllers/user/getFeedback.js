const userModel = require('../../models/users');

const getFeedbacks = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await userModel.findById(userId);
        if (!user) {
            res.status(404).send({msg: "user not found"})
        }
        const feedbacks = user.feedbacks;
        const result = [];
        for (let i = 0; i < feedbacks.length ; i++) {
            const feedback = feedbacks[feedbacks.length - i - 1];
            if (!feedback.isDeleted) {
                const author = await userModel.findById(feedback.authorId);
                feedback.authorImage = author.image;
                feedback.authorName = author.name;
            }
            result.push(feedback);
        }
        res.status(200).send({feedbacks : result})
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = getFeedbacks;