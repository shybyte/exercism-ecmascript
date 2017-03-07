const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function* generateDatesInMonth(year, month, weekdayName) {
  const weekday = WEEKDAYS.indexOf(weekdayName);
  const newDate = (dayInMonth) => new Date(year, month, dayInMonth);
  for (let dayOfMonth = 1, date = newDate(dayOfMonth); date.getMonth() === month; date = newDate(++dayOfMonth)) {
    if (date.getDay() === weekday) {
      yield date;
    }
  }
}

export default (year, month, weekdayName, selector) => {
  const dates = [...generateDatesInMonth(year, month, weekdayName)];
  switch (selector) {
    case 'teenth':
      return dates.find(date => (13 <= date.getDate() && date.getDate() <= 19));
    case 'last':
      return dates[dates.length - 1];
    default:
      const date = dates[parseInt(selector) - 1];
      if (!date) {
        throw new Error('Date does not exist.')
      }
      return date;
  }
}