const router = require('express').Router();
const laptopController = require('../controllers/laptopController');

router.get('/model', laptopController.getModel);
router.get('/db', laptopController.getDB);
// router.post('/post', laptopController.createLaptop);
// router.post('/find', laptopController.findLaptop);

module.exports = router;
