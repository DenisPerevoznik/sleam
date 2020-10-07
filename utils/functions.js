module.exports = function getDate(date = null){

    const localDate = date ? new Date(date) : new Date();
    const month = localDate.getMonth() + 1;
    const day = localDate.getDate();
    return {
        day: day < 10 ? ('0' + day) : day,
        month: month < 10 ? ('0' + month) : month,
        year: localDate.getFullYear(),
        hours: localDate.getHours(),
        minutes: localDate.getMinutes(),
        seconds: localDate.getSeconds(),
    };
}