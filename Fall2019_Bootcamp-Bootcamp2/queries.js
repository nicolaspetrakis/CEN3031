/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect(config.db.uri, {useNewUrlParser: true});
//mongoose.set('useCreateIndex', true);
//mongoose.set('useFindModify', false);

var findLibraryWest = function() {
  Listing.find({name : 'Library West'}, function(err,result) {
    if (err) throw(err);

    if(result){
      console.log(result[0])
    }else{
      console.log('test');
    }
    //console.log(result);
  });
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() {
  Listing.findOneAndRemove({code : 'CABL'}, function(err,result) {
    if (err) throw(err);
    if(result){
      console.log(result);
    }
  });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function() {
  var query = {code: 'PHL'};
  var updated = {address: '1953 Museum Rd, Gainesville, FL 32603'};
  Listing.findOneAndUpdate(query, updated, function(err, result){
    if (err) throw(err);

    if(result){
      console.log(result)
    }else{
      console.log('test');
    }
  });
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
};
var retrieveAllListings = function() {
  Listing.find(function(err, result){
    if (err) throw(err);

    if(result){
      console.log(result)
    }else{
      console.log('test');
    }
  });
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

//findLibraryWest();
//removeCable();
updatePhelpsLab();
//retrieveAllListings();
