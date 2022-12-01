const getUserDetail = require('../controllers/user/getUserDetail');
const updateUser = require('../controllers/user/updateUser');

const getUserFeedbacks = require('../controllers/user/getFeedback');
const postFeedback = require('../controllers/user/postFeedback');
const deleteFeedback = require('../controllers/user/deleteFeedback');

const authenticate = require('../middlewares/auth');

const router = require("express").Router();

router.get('/:userId', getUserDetail);
router.put('/:userId', authenticate, updateUser)

router.get('/:userId/feedback', getUserFeedbacks);
router.post('/:userId/feedback', authenticate, postFeedback);
router.post('/:userId/feedback/:feedbackId', authenticate, deleteFeedback);

module.exports = router