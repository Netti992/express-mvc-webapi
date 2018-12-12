const express = require('express');
const flats = express();
const models = require('../models');

// INDEX
flats.get('/', (req, res) => { // a flats nevű objektum a get metódussal két bemeneti argumentumot vár, ami a request és a response
  models.Flat.findAll() // a models nevű objectum a Flats nevű objektumnak a findAll metódusában egy paramétert vár, melyek az objektum property-jei lesznek
    .then(flats => {  // majd egy promissal tér vissza
      res.json(flats); // ami a res objektum json formátumú metódusával tér vissza, amely megjeleníti az elemeket
    });
});

// SHOW BY ID
flats.get('/:id', (req, res) => { // a flats nevű objektum a get metódussal két bemeneti argumentumot vár, ami a request és a response
  models.Flat.findById(req.body, { // a models nevű objectum a Flats nevű objektumnak a findById metódusában egy paramétert vár, melyek az objektum property-jei lesznek
    where: {id: req.body.is} // ahol az objektum id-ja megegyezik a body-ban megadott id-val
  })
    .then(flat => { // majd egy promissal tér vissza
      res.json(flat); // ami a res objektum json formátumú metódusával tér vissza, amely megjeleníti az id alapján várt elemet
    });
});

// CREATE
flats.post('/', (req, res) => { // a flats nevű objektum a post metódussal két bemeneti argumentumot vár, ami a request és a response
  models.Flats.create({ // a models nevű objectum a Flats nevű objektumnak a create metódusában a létrehozni kívánt paramétereket várja, melyek az objektum property-jei lesznek
    id: req.body.id,
    title: req.body.title,
    price: req.body.price,
    floorArea: req.body.floorArea,
    country: req.body.country,
    zip: req.body.zip,
    city: req.body.city,
    street: req.body.street
  })
    .then(flat => { // majd egy promissal tér vissza
      res.json(flat); // ami a res objektum json formátumú metódusával tér vissza, amely megjeleníti a létrehozott elemet
    });
});

// UPDATE
flats.put('/:id', (req, res) => { // a flats nevű objektum a put metódussal két bemeneti argumentumot vár, ami a request és a response
  models.Flats.update(req.body, { // a models nevű objectum a Flats nevű objektumnak a update metódusában egy paramétert vár, mely az objektum property-je lesz
    where: {id: req.body.id}
  })
    .then(flat => { // majd egy promissal tér vissza
      res.json(flat);  // ami a res objektum json formátumú metódusával tér vissza, amely megjeleníti az id alapján várt elemet
    });
});

// DELETE
flats.delete('/:id', (req, res) => { // a flats nevű objektum a delete metódussal két bemeneti argumentumot vár, ami a request és a response
  models.Flats.destroy(req.body, { // a models nevű objectum a Flats nevű objektumnak a delete metódusában egy paramétert vár, mely az objektum property-je lesz
    where: {id: req.body.id}
  })
    .then(flats => { // majd egy promissal tér vissza
      res.json(flats); // ami a res objektum json formátumú metódusával tér vissza, amely megjeleníti az elemeket
    });
});

module.exports = flats;
