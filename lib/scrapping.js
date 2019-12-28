
const axios = require('axios')
const cheerio = require('cheerio')

export async function getHTML(url) {
    const { data: html } = await axios.get(url);
    return html;
  }

export async function getTwitterCount() {
    const html = await getHTML('https://twitter.com/adimessika');
    const twitterCount = await getTwitterFollowers(html);
    return twitterCount;
  }


export async function getTwitterFollowers(html) {
    // load up cheerio
    const $ = cheerio.load(html);
    const span = $('[data-nav="followers"] .ProfileNav-value');
    return span.data('count');
  }