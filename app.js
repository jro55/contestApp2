// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
var entryController = require('./controller/entriesController')
app.get('/', function(req, res){
  res.sendFile('index.html', {root: './public/html/'})
});

app.get('/viewPage', function(req, res){
    res.sendFile('viewPage.html', {root: './public/html/'})
})

app.post('/entryroute', entryController.createEntry)
app.get('/getentryroute', entryController.getEntries)

app.post('/vote', entryController.vote)

app.post('/endround', entryController.endRoundChangeArray)

app.get('/winner', function(req, res){
    res.sendFile('winner.html', {root: './public/html/'})
})

app.post('/cleararray', entryController.clearArray)

// Creating Server and Listening for Connections \\
var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);

})