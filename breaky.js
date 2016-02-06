const cheerio = require('cheerio');
const S = require('sanctuary');
const doc = require('fs').readFileSync('doc.html').toString('utf8');

S.Maybe.of(doc)
.map(cheerio.load)
.map($ => $('body'))
