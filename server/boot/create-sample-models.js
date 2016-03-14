// Scripts placed in server/boot will run at server start.
// This script will drop and recreate data in the database.
var async = require('async');
module.exports = function(app) {
  //data sources
  var mongoDs = app.dataSources.mongoDs;
  // var mysqlDs = app.dataSources.mysqlDs;
  //create all models
  async.parallel({
    racers: async.apply(createRacers),
    manufacturers: async.apply(createManufacturers),
  },  function(err, results) {
    if (err) throw err;
    createCars(results.manufacturers, function(err) {
      console.log('> models created sucessfully');
    });
  });
  //create racers
  function createRacers(cb) {
    mongoDs.automigrate('racer', function(err) {
      if (err) return cb(err);
      var Racer = app.models.racer;
      Racer.create([
        {email: 'nickykeyse@gmail.com', password: 'nickykeyse'},
        {email: 'adambrowne52@gmail.com', password: 'adambrowne'},
        {email: 'jane@doe.com', password: 'janedoe'}
      ], cb);
    });
  }
  //create coffee shops
  function createManufacturers(cb) {
    mongoDs.automigrate('manufacturer', function(err) {
      if (err) return cb(err);
      var Manufacturer = app.models.manufacturer;
      Manufacturer.create([
        {name: 'Ariel'},
        {name: 'Aston Martin'},
        {name: 'Audi'},
      ], cb);
    });
  }
  //create Cars
  function createCars(manufacturers, cb) {
    mongoDs.automigrate('car', function(err) {
      if (err) return cb(err);
      var Car = app.models.car;

      Car.create([
        {
          model: 'Atom 3.5',
          ManufacturerId: manufacturers[0].id,
        },
        {
          model: 'Atom V8',
          ManufacturerId: manufacturers[0].id,
        },
        {
          model: 'DB9',
          ManufacturerId: manufacturers[1].id,
        },
        {
          model: 'V12 Vantage S',
          ManufacturerId: manufacturers[1].id,
        },
        {
          model: 'Vanquish',
          ManufacturerId: manufacturers[1].id,
        },
        {
          model: 'Vantage GT3',
          ManufacturerId: manufacturers[1].id,
        },
        {
          model: 'Vantage N430',
          ManufacturerId: manufacturers[1].id,
        },
        {
          model: 'Vulcan',
          ManufacturerId: manufacturers[1].id,
        },
        {
          model: 'R18 e-tron quattro (2014)',
          ManufacturerId: manufacturers[2].id,
        },
      ], cb);
    });
  }
};
