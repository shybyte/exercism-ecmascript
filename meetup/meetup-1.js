const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const searchForTeenth = (year, month, weekday) => {
  const weekDay13 = new Date(year, month, 13).getDay();
  return new Date(year, month, 13 + (weekday - weekDay13 + 7) % 7);
};

const searchForXrdWeekday = (year, month, weekday, ordinalNumber) => {
  const firstWeekDayInMonth = new Date(year, month, 1).getDay();
  const date = new Date(year, month, (weekday - firstWeekDayInMonth + 7 ) % 7 + 1 + (ordinalNumber - 1) * 7);
  if (date.getMonth() !== month) {
    throw new Error('Date does not exist.')
  }
  return date;
};


const searchForLastWeekday = (year, month, weekday) => {
  let dayInMonth = 21;
  let lastMatchingDate;
  let date = new Date(year, month, dayInMonth);
  while (date.getMonth() === month) {
    if (date.getDay() === weekday) {
      lastMatchingDate = date;
    }
    date = new Date(year, month, dayInMonth++);
  }
  return lastMatchingDate;
};


export default (year, month, weekdayName, which) => {
  const weekday = WEEKDAYS.indexOf(weekdayName);
  switch (which) {
    case 'teenth':
      return searchForTeenth(year, month, weekday, which);
    case 'last':
      return searchForLastWeekday(year, month, weekday);
    default:
      return searchForXrdWeekday(year, month, weekday, parseInt(which));
  }
}