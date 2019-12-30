import { getTwitterCount } from './lib/scrapping.js'
import cors from 'cors';

const express = require('express');
const app = express();
app.use(cors());
const path = require('path');



app.get('/scrape', async (req, res, next) => {
    const followers = await getTwitterCount();
    res.status(200).json((followers));

});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(process.env.PORT || 1988, () => {
    console.log('Node app is working!');
});