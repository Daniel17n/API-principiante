const router = require('express').Router();

router.get('/users', user_Controller.getUsers);

router.get('/db', user_Controller.getDB);

module.exports = router;
