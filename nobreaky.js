const cheerio = require('cheerio');
const F = require('ramda-fantasy');
const doc = require('fs').readFileSync('doc.html').toString('utf8');

F.Maybe.of(doc)
.map(cheerio.load)
.map($ => $('body'))
