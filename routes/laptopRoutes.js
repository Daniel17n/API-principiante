const router = require('express').Router();
const userController = require('../controllers/laptopController');

router.get('/model', userController.getModel);
router.get('/db', userController.getDB);
module.exports = router;
