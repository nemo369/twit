import {getTwitterCount} from './lib/scrapping.js'

scrape()
async function scrape() {
    const followers = await getTwitterCount()
    console.log(parseFloat(followers));
    
    
}
