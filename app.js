const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Ponle algo más, aquí no hay nada!');
});

app.use(router);

app.use('/', userRoutes);

app.listen(port, () => {
  console.log('Node server running on http://localhost:3000');
});
