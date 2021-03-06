const Laptop = require('../models/laptopModel');

function getModel(req, res) {
  res.send('De momento no hay modelos disponibles');
}

function getDB(req, res) {
  res.send('Ostras! Se nos ha olvidado encender la base de datos, espera... [F5]');
}

function addLaptop(req, res) {
  const laptop = new Laptop(req.body);

  laptop.save((err, newLaptop) => {
    if (err) return res.status(400).send({ message: 'Error saving this laptop', error: err });

    return res.status(200).send(newLaptop);
  });
}

function findLaptop(req, res) {
  const param = req.body;
  console.log(req.body);

  Laptop.find(param, (error, laptop) => {
    if (error) return res.status(404).send({ message: 'No laptop found', error });

    return res.status(200).send(laptop);
  });
}

function changeLaptop(req, res) {
  const { id } = req.params;
  const laptop = new Laptop(req.body);

  Laptop.findOneAndReplace(id, laptop, (err) => {
    if (err) return res.status(404).send({ message: 'No laptop model to replace found', err });
    return res.status(200).send({ message: 'Laptop data replaced', laptop });
  });
}

function deleteLaptop(req, res) {
  const { id } = req.params;
  const laptop = new Laptop(req.body);
  console.log(id);
  laptop.findByIdAndRemove(id, (err, model) => {
    if (err) return res.status(500).send(err);
    if (!model) return res.status(404).send({ message: 'Model not found' });
    return res.status(200).send({ message: 'Model deleted' });
  });
}

module.exports = {
  getDB,
  getModel,
  addLaptop,
  findLaptop,
  changeLaptop,
  deleteLaptop,
};
