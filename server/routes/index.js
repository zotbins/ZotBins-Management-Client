var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



async function getBinBreakbeamCount(Lbins, Rbins, Cbins, startTimestamp, endTimestamp) {
  // var LandfillBins = ['ZBin2B'];
  var count = {recycle: 0, landfill: 0, compost: 0};
  // var startTimestamp = "2020-02-01+00%3A00%3A00"
  // var endTimestamp = "2020-02-03+23%3A59%3A59"

  for (var i in Lbins) {
    await fetch("https://zotbins.pythonanywhere.com/observation/count?sensor_id=" + Lbins[i] + 
    "&start_timestamp=" + startTimestamp + "%3A00&end_timestamp=" + endTimestamp, {
      method: 'GET',
    }).then((response) => {return(response.json())}).then((json) => {count.landfill += json.count}).catch(error => console.log(error));
  }

  for (var i in Rbins) {
    await fetch("https://zotbins.pythonanywhere.com/observation/count?sensor_id=" + Rbins[i] + 
    "&start_timestamp=" + startTimestamp + "%3A00&end_timestamp=" + endTimestamp, {
      method: 'GET',
    }).then((response) => {return(response.json())}).then((json) => {count.recycle += json.count}).catch(error => console.log(error));
  }

  for (var i in Cbins) {
    await fetch("https://zotbins.pythonanywhere.com/observation/count?sensor_id=" + Cbins[i] + 
    "&start_timestamp=" + startTimestamp + "%3A00&end_timestamp=" + endTimestamp, {
      method: 'GET',
    }).then((response) => {return(response.json())}).then((json) => {count.compost += json.count}).catch(error => console.log(error));
  }

  console.log(count);
  return(count);
}

router.get('/bin_breakbeam_count/:startTimestamp/:endTimestamp', async function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  var LandfillBins = ['ZBin2B'];
  var RecycleBins = ['ZBin4B','ZBin7B'];
  var CompostBins = ['ZBin3B'];
  var startTimestamp = req.params.startTimestamp;
  var endTimestamp = req.params.endTimestamp;
  var count_result = {recycle: 0, landfill: 0, compost: 0};

  getBinBreakbeamCount(LandfillBins, RecycleBins, CompostBins, startTimestamp, endTimestamp).then(result => res.send(result)).catch(error => console.log(error));

});

router.get('/weight/:startTimestamp/:endTimestamp', async function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  
});

router.get('/csv/:id/:startTimestamp/:endTimestamp', async function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Content-Disposition", "attachment;filename=data_" + req.params.id + " " + req.params.startTimestamp + " " + req.params.endTimestamp +  ".csv");

  fetch("https://zotbins.pythonanywhere.com/observation/stats?sensor_id=" + req.params.id + 
    "&start_timestamp=" + req.params.startTimestamp + "&end_timestamp=" + req.params.endTimestamp, {
      method: 'GET',
    })
    .then((response) => response.text())
    .then(body => res.send(body))  
    .catch(error => console.log(error));
  
});

module.exports = router;
