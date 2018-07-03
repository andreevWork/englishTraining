export class Subtitles {
  static cache = {};
  
  static parser(src, data) {
    const items = [];
    const regex = /(\d+)\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/g;
  
    data = data.replace(/\r/g, '');
    data = data.split(regex);
    data.shift();
  
    for (let i = 0; i < data.length; i += 4) {
      items.push({
        startTime: Subtitles.timeMs(data[i + 1].trim()),
        endTime: Subtitles.timeMs(data[i + 2].trim()),
        text: data[i + 3].trim()
      });
    }
  
    Subtitles.cache[src] = items;

    return Subtitles.cache[src];
  }
  
  static timeMs(val) {
    const regex = /(\d+):(\d{2}):(\d{2}),(\d{3})/;
    const parts = regex.exec(val);
    
    if (parts === null) {
      return 0;
    }
    
    for (let i = 1; i < 5; i++) {
      parts[i] = parseInt(parts[i], 10);
      if (isNaN(parts[i])) parts[i] = 0;
    }
    
    return parts[1] * 3600 + parts[2] * 60 + parts[3] + parts[4] / 1000;
  }
}
