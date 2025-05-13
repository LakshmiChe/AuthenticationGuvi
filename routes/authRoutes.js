const express = require('express');
const { registerUser, loginUser, getUserInfo } = require('../controllers/authController');
const { verifyToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user-info', verifyToken, getUserInfo);

module.exports = router;
