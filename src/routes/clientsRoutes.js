var express = require('express');
var router = express.Router();
const Users = require('./../clientController/userController');
const Dashboard = require('../clientController/dashboardController');
var {signUpValidator} = require('../../utils/validator');

router.get('/login', Users.login)
router.post('/login', Users.login)
router.get('/signup', Users.signUp)
router.post('/signup', signUpValidator, Users.signUp)
router.get('/dashboard', Dashboard.dashboard)

module.exports = router;