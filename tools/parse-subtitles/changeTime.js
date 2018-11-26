const fs = require('fs');
const path = require('path');

let subs = fs.readFileSync(path.resolve(__dirname, '../../subs.json'), 'utf8');

let time = 0;

time = time / 1000;

subs = JSON.parse(subs).map(sub => ({
  startTime: sub.startTime + time,
  endTime: sub.endTime + time,
  text: sub.text
}));

fs.writeFileSync('subs.json', JSON.stringify(subs, null, 4), 'utf8');
