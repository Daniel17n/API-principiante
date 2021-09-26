const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const userRoutes = require('./routes/user_routes');

const port = process.env.PORT || 3000;

const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hola mundo!');
});

app.use(router);

const routes = require('./routes/user_routes');

app.use('/', router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Node server running on http://localhost:3000');
});
