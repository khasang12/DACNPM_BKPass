const usersModel = require('../../models/users');

const optionalAuth = async (req, res, next) => {
    try {
        const token = request.header('Authorization');
        if (!token) {
            req.body.author = null;
        }
        else {
            const verified = jwt.verify(token, process.env.JWT_KEY);
            const user = await usersModel.findById(verified.user_id)
                                        .select("_id image name description numSellingItems numSaledItems rate numFeedback");
            req.body.author = user;
        }
        next();
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = optionalAuth;