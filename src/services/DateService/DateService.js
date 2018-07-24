
export class DateService {
    static timeSep = ':';

    static getTimeFromS(num) {
        const h = Math.floor(num / 3600);
        num -= h * 3600;
        const m = Math.floor(num / 60);
        num -= m * 60;
        const s = Math.floor(num);

        return {h, m, s};
    }

    static getFormattedTimeFromS(num, format) {
        const time = DateService.getTimeFromS(num);

        return format.split(DateService.timeSep)
            .map(key => `0${time[key]}`.substr(-2))
            .join(DateService.timeSep);
    }

    static getTimeFormatFromS(num) {
        const time = DateService.getTimeFromS(num);
        let flag = false;
        const res = [];

        for (const [key, value] of Object.entries(time)) {
          if (value > 0 || flag) {
            res.push(key);
            flag = true;
          }
        }
        
        return res.join(DateService.timeSep);
    }
}
