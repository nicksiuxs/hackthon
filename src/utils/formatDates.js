const daysInWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const cardinals = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];

const days = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
const formatDate = (startDate, endDate) => {
    // dates should not be falsy
    if (!startDate || !endDate) return "";

    let localeStartString = startDate.toLocaleTimeString('CO', { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' });
    let localeEndString = endDate.toLocaleTimeString('CO', { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' });
    return (
        daysInWeek[startDate.getDay()] +
        " " +
        monthNames[startDate.getMonth()] +
        " " +
        startDate.getDate() +
        cardinals[Number(startDate.getDate().toString().slice(-1))] +
        ", " +
        startDate.getFullYear() +
        " - " +
        localeStartString +
        " - " +
        localeEndString
    );
};

const getTotalHours = (startDate, endDate) => {
    const initialHour = startDate.getHours();
    const endHour = endDate.getHours();
    return endHour - initialHour;
}

export { formatDate, getTotalHours, days, months }