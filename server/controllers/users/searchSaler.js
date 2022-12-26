const usersModel = require('../../models/users');

const searchSaler = async (req, res) => {
    try {
        const sortBy = req.query.sortby;
        const name = req.query.name;
        const pageNum = parseInt(req.query.page? req.query.page : 1);
        const limit = parseInt(req.query.limit? req.query.limit : 10);
        sortPattern = {}
        if (sortBy === "rate") {
            sortPattern.averageStarsRate = -1;
            sortPattern.numRate = -1
        }
        else if (sortBy === "currNum") {
            sortPattern.numSellingItems= -1;
        }
        else {
            sortPattern.numSaledItems= -1;
        }
        const start = limit * (pageNum - 1);
        const end = limit * pageNum;
        const salers = await usersModel.find({name: { $regex: name, $options: 'i' }})
                        .limit(end)
                        .sort(sortPattern)
                        .select("_id image name description numSellingItems numSaledItems averageStarsRate numRate");
        if ((end <= 0) || (start >= salers.length)) {
            res.status(400).send({msg: "Invalid page num"});
        }
        else {
            res.status(200).send({users : salers.slice(start, end)})
        }
    } catch (error) {
        res.status(400).send({err: error})
    }
}
module.exports = searchSaler;