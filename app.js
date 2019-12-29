// import {getTwitterCount} from './lib/scrapping.js'
var express = require('express');
var app = express();
var path = require('path');

// scrape()
// async function scrape() {
//     const followers = await getTwitterCount()
//     console.log(parseFloat(followers));


// }



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, function () {
    console.log('Node app is working!');
});