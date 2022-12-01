const usersModel = require('../models/users');
const jwt = require("jsonwebtoken")

const authenticate = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) return response.status(401).send({msg: 'Access Denied'});
        else {
            const verified = jwt.verify(token, process.env.JWT_KEY);
            const user = await usersModel.findById(verified.user_id)
                                        .select("_id image name");
            req.body.author = user;
            next();
        }
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = authenticate;