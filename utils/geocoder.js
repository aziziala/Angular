const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'mapquest',
    httpAdapter: 'https',
    apiKey: 'clNuhUgG4uszcupNJoRsnITIGxGbelC2', 
    formatter: null 
  };
  const geocoder = NodeGeocoder(options);

module.exports = geocoder;