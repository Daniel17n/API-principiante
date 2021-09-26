const router = require('express').Router();

const userController = require('../controllers/user_Controller');

router.get('/users', user_Controller.getUsers);

router.get('/db', user_Controller.getDB);

module.exports = router;
