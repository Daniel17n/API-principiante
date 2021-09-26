const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getUsers);
router.get('/db', userController.getDB);
module.exports = router;
