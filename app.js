const express = require('express');
const bodyParser = require('body-parser');
const laptopRoutes = require('./routes/laptopRoutes');
const laptopController = require('./controllers/laptopController');

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router.post('/', laptopController.addLaptop);
app.use(router);
app.use('/', laptopRoutes);
app.listen(port, () => {
  console.log('Node server running on http://localhost:3000');
});
