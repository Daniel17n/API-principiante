const laptopModel = require('../models/laptopModel');
const Laptop = require('../models/laptopModel');
/*
function getModel(req, res) {
  res.send('De momento no hay modelos disponibles');
}

function getDB(req, res) {
  res.send('Ostras! Se nos ha olvidado encender la base de datos, espera... [F5]');
}
*/
function addLaptop(req, res) {
  const laptop = new Laptop(req.body);

  laptop.save((err, newLaptop) => {
    if (err) return res.status(400).send({ message: 'Error saving this laptop', error: err });

    return res.status(200).send(newLaptop);
  });
}

function findLaptop(req, res) {
  const param = req.body;

  laptopModel.find(param, (error, laptop) => {
    if (error) return res.status(404).send({ message: 'No laptop found', error });

    return res.status(200).send(laptop);
  });
}

module.exports = {
 /* getDB,
  getModel,*/
  addLaptop,
  findLaptop,
};
