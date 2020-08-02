
const axios = require('axios')
const cheerio = require('cheerio')

export async function getHTML(url) {
    const { data: html } = await axios.get(url);
    return html;
  }

export async function getTwitterCount() {
    const html = await getHTML('https://mobile.twitter.com/adimessika');
    const twitterCount = await getTwitterFollowers(html);
    return twitterCount ? twitterCount : 7500 ;
  }


export async function getTwitterFollowers(html) {
      // load up cheerio
      const $ = cheerio.load(html);
      let res = 7500
      const stats = $('.statnum');
      $(stats).each(function(i, stat){
        if(i === stats.length-1){
          res = $(stat).text()
        }
     
      })
      return +res;
    
  }
  // console.log($(link).text() + ':\n  ' + $(link).attr('href'));
  