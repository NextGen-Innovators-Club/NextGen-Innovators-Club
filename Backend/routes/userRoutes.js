const express = require('express');
const router = express.Router();
const { joinUser } = require('../controllers/userController');

router.post('/', joinUser);

module.exports = router;
