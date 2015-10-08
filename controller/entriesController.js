var entryModel = require('../model/entries.js')

var createEntry = function(req, res) {
    var entry = new entryModel.Entry(req.body)
    res.send(entryModel.allEntries)
}

var getEntries = function(req, res) {
    res.send(entryModel.allEntries)
}

var vote = function(req, res) {
    entryModel.allEntries[req.body.index].numOfVotes++
    res.send(entryModel.allEntries)
}

var endRoundChangeArray = function(req, res) {
    if (entryModel.allEntries[0].numOfVotes > entryModel.allEntries[1].numOfVotes) {
        var winner = entryModel.allEntries.splice(0, 1)[0]
        entryModel.allEntries.push(winner)
        entryModel.allEntries.splice(0,1)
        console.log(entryModel.allEntries)
    }
    else {
        var winner2 = entryModel.allEntries.splice(1, 1)[0]
        entryModel.allEntries.push(winner2)
        entryModel.allEntries.splice(0,1)
        console.log(entryModel.allEntries)

    }
    res.send(entryModel.allEntries)
}

var clearArray = function(req, res) {
    entryModel.allEntries = [];
    res.send(entryModel.allEntries)
}



module.exports = {
    createEntry : createEntry,
    getEntries : getEntries,
    vote : vote,
    endRoundChangeArray : endRoundChangeArray,
    clearArray : clearArray
}