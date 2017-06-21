// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Title' });
});

router.get('/year/:yyear/:mmonth/:ddate/:hhours/:mminute/:sseconds/:fireTitle/:fireBody', function(req, res) {

      var year1 = req.params.yyear;
      var month1 = req.params.mmonth;
      var date1 = req.params.ddate;
      var hours1 = req.params.hhours;
      var minute1 = req.params.mminute;
      var seconds1 = req.params.sseconds;
      var fireTitle1 = req.params.fireTitle;
      var fireBody1 = req.params.fireBody;


      // var firebaseMessage1 = req.parms.firebaseMessage;
      var responseObject= "Your Notification has been Set : "+year1+month1+date1+hours1+minute1+seconds1+fireTitle1+fireBody1;


      var cron = require('node-schedule');
      var date = new Date(year1, month1, date1, hours1, minute1, seconds1);
      cron.scheduleJob(date, function(){

        var request = require("request");

      request("https://us-central1-aaafirebasemap.cloudfunctions.net/sendNotification?to=all&title="+fireTitle1+"&body="+fireBody1 , function(error, response, body) {
        console.log(body);
      });
          // console.log(new Date(), "Somthing!");
      });

      res.send(responseObject);

});


module.exports = router;
