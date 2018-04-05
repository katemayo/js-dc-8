var startupX = ['Uber', 'Google Translate', 'Amazon' + "'" + 's Alexa', 'Siri', 'Facebook', 'Twitter', 'Slack', 'Spotify', 'Tesla', 'Hyperloop', 'Snapchat', 'LinkedIn']
var startupY = ['puppies', 'your exes', 'Ryan Gosling look-alikes', 'cat ladies', 'atheists', 'vegans', 'crossfitters', 'venture capitalists', 'wannabe entrepreneurs', 'ugly people', 'stalkers', 'nerds', 'people who think they' + "'" + 're better than you']

//can i make them objects and use search terms to add a random relevant giphy
// var startupX2 = [{startup:'Uber', searchTerm:'Uber'}, {startup:'Google Translate', searchTerm:'translate'}, {startup:'Amazon'+"'"+'s Alexa', searchTerm:'alexa'}, {startup:'Siri', searchTerm:'siri'}, {startup:'Facebook', searchTerm:'facebook'}, {startup:'Twitter', searchTerm:'twitter'}, {startup:'Slack', searchTerm:'the office'}, {startup:'Spotify', searchTerm:'music'}, {startup:'Tesla', searchTerm:'self driving'}, {startup:'Hyperloop', searchTerm:'fancy train'}, {startup:'Snapchat', searchTerm:'snapchat'}, {startup:'LinkedIn', searchTerm:'linkedin'}];
var random1 = Math.floor((Math.random() * startupX.length))
var random2 = Math.floor((Math.random() * startupY.length))

function newStartup() {
    random1 = Math.floor((Math.random() * startupX.length))
    random2 = Math.floor((Math.random() * startupY.length))
    document.body.append('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '. ')
};

var faveStartup = [];

function favoriteStartup() {
    faveStartup.push('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '. ')
    // console.log(faveStartup)
};

function printFaveStartups() {
    document.body.append('My favorite startup ideas are: ' + faveStartup.join(''))
};