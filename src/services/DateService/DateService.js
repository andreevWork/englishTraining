
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

        return Object.entries(time)
            .map(([key, value]) => value > 0 ? key : null)
            .filter(Boolean)
            .join(DateService.timeSep);
    }
}
