function isLeapYear(year) {
  if (year === 0) {
    return false;
  }

  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

function isInvalidDay(maxDays, day) {
  return day === 0 || day > maxDays;
}

function isInvalidMonth(month) {
  return month === 0 || month > 12;
}

function isInvalidFormat(month, maxDays, day, year) {
  const finalDay = maxDays === day && (year === 9999);

  return isInvalidMonth(month) || isInvalidDay(maxDays, day) || finalDay;
}

function pad0(string, count) {
  return string.padStart(count, '0');
}

function DayCount30or31(month) {
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11: return 30;
    default: return 31;
  }
}

function maxDayCount(month, year) {
  const maxDaysInFeb = isLeapYear(year) ? 29 : 28;

  return month === 2 ? maxDaysInFeb : DayCount30or31(month);
}

function nextDate(date) {
  const day = parseInt(date.slice(0, 2));
  const month = parseInt(date.slice(3, 5));
  const year = parseInt(date.slice(6, date.length));

  const maxDays = maxDayCount(month, year);


  if (isInvalidFormat(month, maxDays, day, year)) {
    return 'Invalid Date';
  }

  const isLastDay = day === maxDays;

  const isIncrementYear = month === 12 && isLastDay;

  const yearPart = pad0(`${isIncrementYear ? year + 1 : year}`, 4);
  const dayPart = isLastDay ? "01" : pad0(`${day + 1}`, 2);
  const monthPart = pad0(isLastDay ? `${(month % 12) + 1}` : month + '', 2);

  return `${dayPart}-${monthPart}-${yearPart}`;
}

function testCode(purpose, string, expected) {
  const actual = nextDate(string);
  const isWorking = actual === expected;
  const symbol = isWorking ? " ✅" : " ❌";
  let message = `\t${symbol} ${purpose}\n`;

  message += isWorking ? "" : `\t   | Input    : ${string}\n`;
  message += isWorking ? "" : `\t   | Actual   : ${actual}\n`;
  message += isWorking ? "" : `\t   | Expected : ${expected}\n`;

  console.log(message);
}

function testAllTestCases() {
  // testCode('works', '31-12-9999', 'Invalid Date');
}

testAllTestCases();
