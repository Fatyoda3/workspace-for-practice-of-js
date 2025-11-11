function padWithZeros(number, length) {
  return `${number}`.padStart(length, "0");
}

function formatDate(day, month, year) {
  const paddedDay = padWithZeros(day, 2);
  const paddedMonth = padWithZeros(month, 2);
  const paddedYear = padWithZeros(year, 4);

  return `${paddedDay}-${paddedMonth}-${paddedYear}`;
}

function inDayRange(day, month, year) {
  return day <= lastDayOfMonth(month, year) && day > 0;
}

function inMonthRange(month) {
  return month < 13 && month > 0;
}

function inYearRange(year) {
  return year < 10000 && year >= 0;
}

function isOutOfRange(day, month, year) {
  return !inDayRange(day, month, year) || !inMonthRange(month) || !inYearRange(year);
}

function isLeapYear(year) {
  if (year === 0) {
    return false;
  }
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function lastDayOfMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  return 30 + ((month % 7) % 2);
}

function nextDate(date) {
  const day = parseInt(date.slice(0, 2));
  const month = parseInt(date.slice(3, 5));
  const year = parseInt(date.slice(6, date.length));

  if (isOutOfRange(day, month, year)) {
    return "Invalid Date";
  }

  const numberOfDays = lastDayOfMonth(month, year);
  const newDay = day % numberOfDays + 1;
  const newMonth = (month + Math.floor(day / numberOfDays)) % 12;
  const newYear = year + (Math.floor((month / 12) / ((day % numberOfDays) + 1)));

  return formatDate(newDay, newMonth, newYear);
}

function composeMessage(type, date, actual, expected) {
  const isPassed = actual === expected;
  const status = isPassed ? "✅" : "❌";
  let message = status + type;
  if (!isPassed) {
    message += "\n\n-----------------------------------------------";
    message += `\n\tinput: [ ${date}]`;
    message += `\n\tactual: ${actual};`
    message += `\n\texpected: ${expected}`;
    message += "\n-----------------------------------------------\n";
  }

  return message;
}

function testNextDate(type, date, expected) {
  const actual = nextDate(date);
  const message = composeMessage(type, date, actual, expected);

  console.log(message);
}

function testAll() {
  testNextDate("a normal day", "10-04-2021", "11-04-2021");
  testNextDate("end of month which ends on 30", "30-04-2021", "01-05-2021");
  testNextDate("end of month which ends on 31", "31-05-2021", "01-06-2021");
  testNextDate("28th February in a non leap year", "28-02-2021", "01-03-2021");
  testNextDate("29th February in a leap year", "29-02-2024", "01-03-2024");
  testNextDate("28th February in a leap year", "28-02-2024", "29-02-2024");
  testNextDate("31st December(12th month)", "31-12-2024", "01-01-2025");
  testNextDate("28th February in year 0000", "28-02-0000", "01-03-0000");
  testNextDate("30th Feb in a year", "30-02-2024", "Invalid Date");
  testNextDate("a day more than 31", "32-10-2024", "Invalid Date");
  testNextDate("32 as last day of a year", "32-12-2024", "Invalid Date");
  testNextDate("a day less than 01", "00-10-2024", "Invalid Date");
  testNextDate("a month more than 12", "14-13-2024", "Invalid Date");
  testNextDate("a month less than 1", "14-00-2024", "Invalid Date");
  testNextDate("31st day of 30-day month", "31-04-2021", "Invalid Date");
  testNextDate("29th Feb in a non leap year", "29-02-2021", "Invalid Date");
  testNextDate("july test case", "30-07-2021", "31-07-2021");
}

testAll();