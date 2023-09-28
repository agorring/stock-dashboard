export const convertDateToUnixTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000)
}

export const convertUnixTimestampToDate = (unixTimestamp) => {
    return new Date(unixTimestamp * 1000).toLocaleDateString();
}

export const createDate = (date, days, weeks, months, years) => {
    return new Date(date.getFullYear() + years, date.getMonth() + months, date.getDate() + days + (weeks * 7));
}