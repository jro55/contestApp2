var allEntries = []

var Entry = function(entryData) {
    this.name        = entryData.name;
    this.url         = entryData.url;
    this.title       = entryData.title;
    this.description = entryData.description;
    this.numOfVotes  = 0
    allEntries.push(this)
}

module.exports = {
    allEntries : allEntries,
    Entry : Entry
}