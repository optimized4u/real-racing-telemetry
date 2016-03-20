// Scripts placed in server/boot will run at server start.
// This script will drop and recreate data in the database.
var async = require('async');
module.exports = function(app) {
  //data sources
  var mongoDs = app.dataSources.mongoDs;

  // Create circuits and tracks models.
  console.log('> Starting database part 2 migrations...');

  async.parallel({
    circuits: async.apply(createCircuits),
  }, function(err, results) {
    if (err) throw err;
    createTracks(results.circuits, function(err) {
      console.log('> Circuits and Track models created sucessfully.');
    });
  });
  // create circuits
  function createCircuits(cb) {
    mongoDs.automigrate('circuit', function(err) {
      if (err) return cb(err);
      var Circuit = app.models.circuit;
      Circuit.create([
        {name: "Autodromo Nazionale Monza"},
        {name: "Brands Hatch"},
        {name: "Circuit de Catalunya"},
        {name: "Circuit de Spa-Francorchamps"},
        {name: "Circuit des 24 Heures"},
        {name: "Daytona International Speedway"},
        {name: "Dubai Autodrome"},
        {name: "Hockenheimring"},
        {name: "Indianapolis Motor Speedway"},
        {name: "Mazda Raceway Laguna Seca"},
        {name: "Melbourne"},
        {name: "Mount Panorama"},
        {name: "Nürburgring"},
        {name: "Porsche Test Track"},
        {name: "Richmond International Raceway"},
        {name: "Silverstone"},
        {name: "Suzuka Circuit"}
      ], cb);
    });
  }
  // create tracks
  function createTracks(circuits, cb) {
    mongoDs.automigrate('track', function(err) {
      if (err) return cb(err);
      var Track = app.models.track;

      Track.create([
        {
          name: "Junior Course",
          circuitId: circuit[0].id,
        },
        {
          name: "Road Course",
          circuitId: circuit[0].id,
        },
        {
          name: "Indy Circuit",
          circuitId: circuit[1].id,
        },
        {
          name: "Club Circuit",
          circuitId: circuit[2].id,
        },
        {
          name: "GP Circuit",
          circuitId: circuit[2].id,
        },
        {
          name: "National Circuit",
          circuitId: circuit[2].id,
        },
        {
          name: "Motorcycle Course",
          circuitId: circuit[5].id,
        },
        {
          name: "Road Course",
          circuitId: circuit[5].id,
        },
        {
          name: "Speedway",
          circuitId: circuit[5].id,
        },
        {
          name: "Club Circuit",
          circuitId: circuit[6].id,
        },
        {
          name: "Grand Prix Circuit",
          circuitId: circuit[6].id,
        },
        {
          name: "Hill Circuit",
          circuitId: circuit[6].id,
        },
        {
          name: "International Circuit",
          circuitId: circuit[6].id,
        },
        {
          name: "National Circuit",
          circuitId: circuit[6].id,
        },
        {
          name: "Oval Circuit",
          circuitId: circuit[6].id,
        },
        {
          name: "Grand Prix Circuit",
          circuitId: circuit[7].id,
        },
        {
          name: "National Circuit",
          circuitId: circuit[7].id,
        },
        {
          name: "Short",
          circuitId: circuit[7].id,
        },
        {
          name: "Road Course",
          circuitId: circuit[8].id,
        },
        {
          name: "Speedway",
          circuitId: circuit[8].id,
        },
        {
          name: "Grand Prix Circuit",
          circuitId: circuit[12].id,
        },
        {
          name: "Müllenbachschleife",
          circuitId: circuit[12].id,
        },
        {
          name: "Sprint Circuit",
          circuitId: circuit[12].id,
        },
        {
          name: "Dynamic Circuit",
          circuitId: circuit[13].id,
        },
        {
          name: "On-road Circuit (Long)",
          circuitId: circuit[13].id,
        },
        {
          name: "On-road Circuit (Short)",
          circuitId: circuit[13].id,
        },
        {
          name: "The Bridge Grand Prix Circuit 2009",
          circuitId: circuit[15].id,
        },
        {
          name: "The Grand Prix Circuit",
          circuitId: circuit[15].id,
        },
        {
          name: "The International Circuit",
          circuitId: circuit[15].id,
        },
        {
          name: "The National Circuit",
          circuitId: circuit[15].id,
        },
        {
          name: "East Circuit",
          circuitId: circuit[16].id,
        },
        {
          name: "Grand Prix Circuit",
          circuitId: circuit[16].id,
        },
        {
          name: "West Circuit",
          circuitId: circuit[16].id,
        }
      ], cb);
    });
  }
};
