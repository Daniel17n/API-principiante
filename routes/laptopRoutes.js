const { Router } = require('express');
const laptopController = require('../controllers/laptopController');

const router = Router();

// router.get('/model', laptopController.getModel);
// router.get('/db', laptopController.getDB);
router.get('/', laptopController.findLaptop);
router.post('/', laptopController.addLaptop);
router.put('/:id', laptopController.changeLaptop);

module.exports = router;
