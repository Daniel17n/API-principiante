const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const laptopRoutes = require('./routes/laptopRoutes');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Ponle algo más, aquí no hay nada!');
});

app.use(router);

app.use('/', laptopRoutes);

app.listen(port, () => {
  console.log('Node server running on http://localhost:3000');
});
