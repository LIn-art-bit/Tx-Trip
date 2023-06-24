import dayjs from "dayjs"
export  function formatMonthDay(date, formatStr = "MM月DD日") {
    // console.log(typeof(dayjs(date).format(formatStr)))
    return dayjs(date).format(formatStr)
}
export function getDiffDays(startTime, endTime) {
    return dayjs(endTime).diff(startTime, "day")
}