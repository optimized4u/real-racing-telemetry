// Scripts placed in server/boot will run at server start.
// This script will drop and recreate data in the database.
var async = require('async');
module.exports = function(app) {
  //data sources
  var mongoDs = app.dataSources.mongoDs;
  // var mysqlDs = app.dataSources.mysqlDs;
  //create all models
  console.log('> Starting database migrations...');
  async.parallel({
    racers: async.apply(createRacers),
    manufacturers: async.apply(createManufacturers),
  },  function(err, results) {
    if (err) throw err;
    createCars(results.manufacturers, function(err) {
      console.log('> Racer, Manufacturer and Car models created sucessfully.');
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
        {name: 'Bentley'},
        {name: 'BMW'},
        {name: 'Bugatti'},
        {name: 'Caterham'},
        {name: 'Chevrolet'},
        {name: 'Dodge'},
        {name: 'Ferrari'},
        {name: 'Ford'},
        {name: 'Hyundai'},
        {name: 'Koenigsegg'},
        {name: 'KTM'},
        {name: 'Lamborghini'},
        {name: 'Lexus'},
        {name: 'Maserati'},
        {name: 'McLaren'},
        {name: 'Mercedes-Benz'},
        {name: 'Nissan'},
        {name: 'Pagani'},
        {name: 'Porsche'},
        {name: 'Renault'},
        {name: 'Shelby'},
        {name: 'Spada'},
        {name: 'SRT'},
        {name: 'Toyota'}
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
          manufacturerId: manufacturers[0].id,
        },
        {
          model: 'Atom V8',
          manufacturerId: manufacturers[0].id,
        },
        {
          model: 'DB9',
          manufacturerId: manufacturers[1].id,
        },
        {
          model: 'V12 Vantage S',
          manufacturerId: manufacturers[1].id,
        },
        {
          model: 'Vanquish',
          manufacturerId: manufacturers[1].id,
        },
        {
          model: 'Vantage GT3',
          manufacturerId: manufacturers[1].id,
        },
        {
          model: 'Vantage N430',
          manufacturerId: manufacturers[1].id,
        },
        {
          model: 'Vulcan',
          manufacturerId: manufacturers[1].id,
        },
        {
          model: 'R18 e-tron quattro (2014)',
          manufacturerId: manufacturers[2].id,
        },
        {
          model: 'R18 e-tron quattro (2015)',
          manufacturerId: manufacturers[2].id,
        },
        {
          model: 'R8 LMS Ultra',
          manufacturerId: manufacturers[2].id,
        },
        {
          model: 'R8 V10 Coupe',
          manufacturerId: manufacturers[2].id,
        },
        {
          model: 'R8 V10 Spyder',
          manufacturerId: manufacturers[2].id,
        },
        {
          model: 'TT RS Coupe',
          manufacturerId: manufacturers[2].id,
        },
        {
          model: 'Continental GT Speed',
          manufacturerId: manufacturers[3].id,
        },
        {
          model: 'Continental Supersports',
          manufacturerId: manufacturers[3].id,
        },
        {
          model: '1 Series M Coupe',
          manufacturerId: manufacturers[4].id,
        },
        {
          model: 'M3 Coupe',
          manufacturerId: manufacturers[4].id,
        },
        {
          model: 'M3 GT2 ALMS',
          manufacturerId: manufacturers[4].id,
        },
        {
          model: 'M3 GTS',
          manufacturerId: manufacturers[4].id,
        },
        {
          model: 'M6 Coupe',
          manufacturerId: manufacturers[4].id,
        },
        {
          model: 'Z4 GT3',
          manufacturerId: manufacturers[4].id,
        },
        {
          model: 'Z4 M Coupe',
          manufacturerId: manufacturers[4].id,
        },
        {
          model: 'Z4 sDrive35is',
          manufacturerId: manufacturers[4].id,
        },
        {
          model: 'Veyron 16.4',
          manufacturerId: manufacturers[5].id,
        },
        {
          model: 'Veyron 16.4 Grand Sport Vitesse',
          manufacturerId: manufacturers[5].id,
        },
        {
          model: 'Seven 620 R',
          manufacturerId: manufacturers[6].id,
        },
        {
          model: '69 Stingray 427',
          manufacturerId: manufacturers[7].id,
        },
        {
          model: 'Camaro ZL1',
          manufacturerId: manufacturers[7].id,
        },
        {
          model: 'Cobalt SS',
          manufacturerId: manufacturers[7].id,
        },
        {
          model: 'Corvette Stingray Z51',
          manufacturerId: manufacturers[7].id,
        },
        {
          model: 'Corvette ZR1',
          manufacturerId: manufacturers[7].id,
        },
        {
          model: 'SS (Hendrick Motorsports - 2015)',
          manufacturerId: manufacturers[7].id,
        },
        {
          model: 'SS (Hendrick Motorsports - 2016)',
          manufacturerId: manufacturers[7].id,
        },
        {
          model: 'SS (NASCAR Academy)',
          manufacturerId: manufacturers[7].id,
        },
        {
          model: 'SS (Stewart-Haas Racing - 2015)',
          manufacturerId: manufacturers[7].id,
        },
        {
          model: 'SS (Stewart-Haas Racing - 2016)',
          manufacturerId: manufacturers[7].id,
        },
        {
          model: '69 Charger RT',
          manufacturerId: manufacturers[8].id,
        },
        {
          model: '71 Challenger RT',
          manufacturerId: manufacturers[8].id,
        },
        {
          model: 'Challenger R/T',
          manufacturerId: manufacturers[8].id,
        },
        {
          model: 'Challenger SRT8',
          manufacturerId: manufacturers[8].id,
        },
        {
          model: 'Charger R/T',
          manufacturerId: manufacturers[8].id,
        },
        {
          model: 'Charger SRT8',
          manufacturerId: manufacturers[8].id,
        },
        {
          model: 'Viper SRT10 ACR-X',
          manufacturerId: manufacturers[8].id,
        },
        {
          model: 'Viper SRT10 Coupe',
          manufacturerId: manufacturers[8].id,
        },
        {
          model: '375 F1',
          manufacturerId: manufacturers[9].id,
        },
        {
          model: '412 T2',
          manufacturerId: manufacturers[9].id,
        },
        {
          model: '458 Italia',
          manufacturerId: manufacturers[9].id,
        },
        {
          model: '458 Spider',
          manufacturerId: manufacturers[9].id,
        },
        {
          model: '599 GTO',
          manufacturerId: manufacturers[9].id,
        },
        {
          model: 'Enzo Ferrari',
          manufacturerId: manufacturers[9].id,
        },
        {
          model: 'F12 Berlinetta',
          manufacturerId: manufacturers[9].id,
        },
        {
          model: 'F14 T',
          manufacturerId: manufacturers[9].id,
        },
        {
          model: 'F40',
          manufacturerId: manufacturers[9].id,
        },
        {
          model: 'F50',
          manufacturerId: manufacturers[9].id,
        },
        {
          model: 'FF',
          manufacturerId: manufacturers[9].id,
        },
        {
          model: 'LaFerrari',
          manufacturerId: manufacturers[9].id,
        },
        {
          model: 'Focus RS',
          manufacturerId: manufacturers[10].id,
        },
        {
          model: 'Fusion (NASCAR Academy)',
          manufacturerId: manufacturers[10].id,
        },
        {
          model: 'Fusion (Richard Petty Motorsports)',
          manufacturerId: manufacturers[10].id,
        },
        {
          model: 'Fusion (Team Penske - 2015)',
          manufacturerId: manufacturers[10].id,
        },
        {
          model: 'Fusion (Team Penske - 2016)',
          manufacturerId: manufacturers[10].id,
        },
        {
          model: 'Ford GT',
          manufacturerId: manufacturers[10].id,
        },
        {
          model: 'Ford GT FIA GT1',
          manufacturerId: manufacturers[10].id,
        },
        {
          model: 'Mustang GT Premium',
          manufacturerId: manufacturers[10].id,
        },
        {
          model: 'Shelby GT350R',
          manufacturerId: manufacturers[10].id,
        },
        {
          model: 'Shelby GT500',
          manufacturerId: manufacturers[10].id,
        },
        {
          model: 'i20 WRC',
          manufacturerId: manufacturers[11].id,
        },{
          model: 'Veloster Turbo',
          manufacturerId: manufacturers[11].id,
        },
        {
          model: 'Agera',
          manufacturerId: manufacturers[12].id,
        },
        {
          model: 'Agera R',
          manufacturerId: manufacturers[12].id,
        },
        {
          model: 'CCXR',
          manufacturerId: manufacturers[12].id,
        },
        {
          model: 'Regera',
          manufacturerId: manufacturers[12].id,
        },
        {
          model: 'X-Bow R',
          manufacturerId: manufacturers[13].id,
        },
        {
          model: 'Asterion LPI 910-4',
          manufacturerId: manufacturers[14].id,
        },
        {
          model: 'Aventador LP 700-4',
          manufacturerId: manufacturers[14].id,
        },
        {
          model: 'Countach',
          manufacturerId: manufacturers[14].id,
        },
        {
          model: 'Gallardo LP560 GT3',
          manufacturerId: manufacturers[14].id,
        },
        {
          model: 'Gallardo LP560-4',
          manufacturerId: manufacturers[14].id,
        },
        {
          model: 'Huracán LP 610-4',
          manufacturerId: manufacturers[14].id,
        },
        {
          model: 'Miura',
          manufacturerId: manufacturers[14].id,
        },
        {
          model: 'Murcielago R-SV GT1',
          manufacturerId: manufacturers[14].id,
        },
        {
          model: 'Sesto Elemento',
          manufacturerId: manufacturers[14].id,
        },
        {
          model: 'Veneno',
          manufacturerId: manufacturers[14].id,
        },
         {
          model: 'IS 350 F Sport (2014)',
          manufacturerId: manufacturers[15].id,
        },
        {
          model: 'IS F (2013)',
          manufacturerId: manufacturers[15].id,
        },
        {
          model: 'LFA',
          manufacturerId: manufacturers[15].id,
        },
        {
          model: 'Granturismo MC Stradale',
          manufacturerId: manufacturers[16].id,
        },
        {
          model: 'Granturismo MC Stradale (Limited)',
          manufacturerId: manufacturers[16].id,
        },
        {
          model: '12C Spider',
          manufacturerId: manufacturers[17].id,
        },
        {
          model: '650S GT3',
          manufacturerId: manufacturers[17].id,
        },
        {
          model: 'F1',
          manufacturerId: manufacturers[17].id,
        },
        {
          model: 'F1 GTR',
          manufacturerId: manufacturers[17].id,
        },
        {
          model: 'MP4-12C',
          manufacturerId: manufacturers[17].id,
        },
        {
          model: 'P1',
          manufacturerId: manufacturers[17].id,
        },
        {
          model: 'P1 GTR',
          manufacturerId: manufacturers[17].id,
        },
        {
          model: 'SL 65 AMG Black Series',
          manufacturerId: manufacturers[18].id,
        },
         {
          model: 'SLS AMG',
          manufacturerId: manufacturers[18].id,
        },
         {
          model: 'SLS AMG GT3',
          manufacturerId: manufacturers[18].id,
        },
         {
          model: '350Z (Z33)',
          manufacturerId: manufacturers[19].id,
        },
         {
          model: '370Z (Z34)',
          manufacturerId: manufacturers[19].id,
        },
         {
          model: 'GT-R LM Nismo (2015)',
          manufacturerId: manufacturers[19].id,
        },
         {
          model: 'GT-R Premium (R35)',
          manufacturerId: manufacturers[19].id,
        },
         {
          model: 'JR Motorsports GT-R GT1',
          manufacturerId: manufacturers[19].id,
        },
         {
          model: 'Silvia (S15)',
          manufacturerId: manufacturers[19].id,
        },
         {
          model: 'Skyline GT-R V-Spec (R34)',
          manufacturerId: manufacturers[19].id,
        },
         {
          model: 'Sumo Power GT GT-R GT1',
          manufacturerId: manufacturers[19].id,
        },
         {
          model: 'Huayra',
          manufacturerId: manufacturers[20].id,
        },
        {
          model: 'Zonda F',
          manufacturerId: manufacturers[20].id,
        },
        {
          model: 'Zonda R',
          manufacturerId: manufacturers[20].id,
        },
        {
          model: '911 Carrera 2 Speedster (1993)',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '911 Carrera RS 2.7 (1972)',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '911 Carrera RS 3.8 (1995)',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '911 GT2 (2003)',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '911 GT3 Cup',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '911 GT3 RS',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '911 GT3 RS 4.0',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '911 RSR (2013)',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '911 RSR (2014)',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '911 RSR (2015)',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '911 Targa (1974)',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '911 Turbo (2009)',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '918 RSR Concept',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '918 Spyder Concept',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '918 Spyder Weissach Package',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '919 Hybrid (2014)',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: '919 Hybrid (2015)',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: 'Boxster GTS',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: 'Carrera GT',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: 'Cayman GT4',
          manufacturerId: manufacturers[21].id,
        },
        {
          model: 'Clio Cup',
          manufacturerId: manufacturers[22].id,
        },
        {
          model: 'DeZir Concept',
          manufacturerId: manufacturers[22].id,
        },
        {
          model: 'R.S. 01',
          manufacturerId: manufacturers[22].id,
        },
        {
          model: '66 Cobra 427',
          manufacturerId: manufacturers[23].id,
        },
        {
          model: '67 Cobra GT500',
          manufacturerId: manufacturers[23].id,
        },
        {
          model: 'Codatronca Barchetta',
          manufacturerId: manufacturers[24].id,
        },
        {
          model: 'Codatronca TS',
          manufacturerId: manufacturers[24].id,
        },
        {
          model: 'Viper GTS',
          manufacturerId: manufacturers[25].id,
        },
        {
          model: 'Camry (Joe Gibbs Racing - 2015)',
          manufacturerId: manufacturers[26].id,
        },
        {
          model: 'Camry (Joe Gibbs Racing - 2016)',
          manufacturerId: manufacturers[26].id,
        },
        {
          model: 'Camry (Sunoco)',
          manufacturerId: manufacturers[26].id,
        },
        {
          model: 'TS040 Hybrid (2014)',
          manufacturerId: manufacturers[26].id,
        }
      ], cb);
    });
  }
};
