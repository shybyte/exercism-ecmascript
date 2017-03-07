const MINUTES_IN_ONE_DAY = 60 * 24;

const pad2 = (n) => (n >= 10 ? '' : '0') + n;

const clock = (timeArg) => {
  const time = (timeArg + MINUTES_IN_ONE_DAY * 1e9) % (MINUTES_IN_ONE_DAY);
  const getHour = () => Math.floor(time / 60) % 24;
  const getMinute = () => time % 60;

  return {
    _time: () =>time,
    plus: (minutes) => clock(time + minutes),
    minus: (minutes) => clock(time - minutes),
    equals: (otherClock) => time === otherClock._time(),
    toString: () => pad2(getHour()) + ':' + pad2(getMinute())
  };
}

export default (hour, minute = 0) => clock(hour * 60 + minute);