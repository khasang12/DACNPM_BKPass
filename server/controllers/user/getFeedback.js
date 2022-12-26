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
        const chooseField = ["isDeleted", "_id", "authorId", "content", "numStarsRate", "createAt"]
        for (let i = 0; i < feedbacks.length ; i++) {
            const feedback = {};
            chooseField.forEach((field) => feedback[field] = feedbacks[feedbacks.length - i - 1][field]);
            const author = await userModel.findById(feedback.authorId)
                                    .select("image name");
            feedback.authorImage = author.image;
            feedback.authorName = author.name;
            result.push(feedback);
        }
        res.status(200).send({feedbacks : result})
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = getFeedbacks;