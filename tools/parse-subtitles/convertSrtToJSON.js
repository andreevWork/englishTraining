const parseSRT = require('./parser');
const fs = require('fs');
const path = require('path');

const subs = fs.readFileSync(path.resolve(__dirname, 'subs.srt'), 'utf8');

let json = parseSRT(subs);

json = json.map(sub => ({
  startTime: sub.start,
  endTime: sub.end,
  text: sub.text.replace(/<br \/>/g, '\n').replace(/<.+?>/g, '')
}));

fs.writeFileSync('subs.json', JSON.stringify(json, null, 4), 'utf8');
