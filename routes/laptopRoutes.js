const { Router } = require('express');
const laptopController = require('../controllers/laptopController');

const router = Router();

//router.get('/model', laptopController.getModel);
//router.get('/db', laptopController.getDB);
router.post('/', laptopController.addLaptop);
router.get('/find', laptopController.findLaptop);

module.exports = router;
