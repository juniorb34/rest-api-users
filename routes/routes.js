var express = require('express');
var app = express();
var router = express.Router();
var HomeController = require('../controllers/HomeController');
var UserController = require('../controllers/UserController');
const validationMiddleware = require('../src/validationMiddleware');

router.get('/', HomeController.index);
router.post('/user', validationMiddleware, UserController.create);

module.exports = router;
