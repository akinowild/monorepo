// 是否为工作日
export const isWeekday = (date:Date) => date.getDay() % 6 !== 0;

// 两日期之间相差的天数
export function dateDiffInDays(date1:number, date2:number) {
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

//查找日期位于一年中的第几天
// @ts-ignore
export const dayOfYear = (date:number) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// 根据时间戳变成区间的每一个天的数组
export function generateDateRange(startTimestamp:number, endTimestamp:number) {
    const dayMilliseconds = 24 * 60 * 60 * 1000 // 一天的毫秒数

    const startDate = new Date(startTimestamp)
    const endDate = new Date(endTimestamp)

    const dateRange = []

    for (let date = startDate; date <= endDate; date.setTime(date.getTime() + dayMilliseconds)) {
        const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
            .getDate()
            .toString()
            .padStart(2, '0')}`
        dateRange.push(formattedDate)
    }

    return dateRange
}

// 把提交的时间处理成两个字段
export function splitTime(obj:any) {
    // 修改时间格式
    const query = JSON.parse(JSON.stringify(obj))
    if (query.rangeTime) {
        query.startTime = query.rangeTime[0]
        query.endTime = query.rangeTime[1]
        delete query.rangeTime
    }
    return query
}

// 获取当前时间与之前N天数之间的间隔时间戳 输入间隔天数，默认7天
export function getBetween(num = 7) {
    const currentDay = new Date() // 当前时间
    const beforeDay = new Date(currentDay) // 间隔前的时间
    beforeDay.setDate(currentDay.getDate() - num)
    return {
        currentDay: currentDay.getTime(),
        beforeDay: beforeDay.getTime()
    }
}