const { register, login, setAvatar, getAllUsers, logOut} = require("../controllers/userController");
const getUserDetail = require('../controllers/user/getUserDetail');
const updateUser = require('../controllers/user/updateUser');

const getUserFeedbacks = require('../controllers/user/getFeedback');
const postFeedback = require('../controllers/user/postFeedback');
const deleteFeedback = require('../controllers/user/deleteFeedback');

const authenticate = require('../middlewares/auth');

const router = require("express").Router();

router.post("/register",register)
router.post("/login",login)
// router.post("/setAvatar/:id",setAvatar)
// router.get("/allUsers/:id",getAllUsers)

router.get('/:userId', getUserDetail);
router.put('/:userId', authenticate, updateUser)

router.get('/:userId/feedback', getUserFeedbacks);
router.post('/:userId/feedback', authenticate, postFeedback);
router.post('/:userId/feedback/:feedbackId', authenticate, deleteFeedback);

module.exports = router