const express = require('express');
const app = express();
const path = require('path');
import { getTwitterCount } from './lib/scrapping.js'



app.get('/scrape', async (req, res, next) => {
    console.log(`Scrape It`);
    const followers = await getTwitterCount();
    res.json(followers)
    // return parseFloat(followers);

});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(process.env.PORT || 1988, () => {
    console.log('Node app is working!');
});