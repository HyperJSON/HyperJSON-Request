'use strict';
var tv4 = require('tv4');
var fs = require('fs');

var requestSchema = JSON.parse(fs.readFileSync('./request-schema.json', 'utf8'));

// Expected Failure Test

var badRequest = {};
var valid = tv4.validate(badRequest, requestSchema);

if(valid){
  throw new Error('SHOULD NOT HAVE VALIDATED!')
}


// Expected Success Test

var goodRequest = {
  method: 'GET',
  uri: '/users'
};
var valid = tv4.validate(goodRequest, requestSchema);

if(!valid){
  throw tv4.error;
}


console.log('cool beans!')