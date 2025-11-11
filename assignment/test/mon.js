
function nextDate(date) {
  const dateSize = date.length;
  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(6, dateSize);

  const lastDate = lastDayOfMonth(month, year);

  const isValidDate = isBetween(day, 1, lastDate);

  const isValidMonth = isBetween(month, 1, 12);

  const isValidYear = isBetween(year, 0, 9999);

  if (isValidDate && isValidMonth && isValidYear) {
    let nextDay = dayIncrements(day, month, year);
    return nextDay;
  }

  return "Invalid Date";
}

function isBetween(date, startOfRange, endOfRange) {
  let intergerDate = parseInt(date);

  return intergerDate >= startOfRange && intergerDate <= endOfRange;
}

function lastDayOfMonth(month, year) {
  const integerMonth = parseInt(month);
  const integerYear = parseInt(year);

  switch (integerMonth) {
    case 2:
      return leapYear(integerYear) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }

}

function dayIncrements(day, month, year) {
  const simpleEnd = "29";
  const hyphen = "-";
  const april = "04";
  const june = "06";
  const september = "09";
  const november = "11";

  if (day <= simpleEnd && month != "02") {

    let nextDay = parseInt(day) + 1 + "";
    nextDay = nextDay.padStart(2, "0");
    return nextDay + hyphen + month + hyphen + year;
  }

  if (day === "30") {
    if (month !== april && month !== june && month !== september && month !== november) {
      let nextDay = parseInt(day) + 1 + "";
      nextDay = nextDay.padStart(2, "0");
      return nextDay + hyphen + month + hyphen + year;
    }
  }

  if (day === "31" && month === "12") {
    if (year === "9999") {
      return "Invalid Date";
    }
    let nextMonth = monthIncrements(month);
    let nextYear = parseInt(year) + 1 + "";
    nextYear = nextYear.padStart(4, "0");

    return nextMonth + hyphen + nextYear;
  }


  if (month === "02") {
    let isLeapYear = leapYear(year);

    if (isLeapYear && day !== "29") {
      let nextDay = parseInt(day) + 1 + "";
      return nextDay + hyphen + month + hyphen + year;
    }
  }

  let nextMonth = monthIncrements(month);
  return nextMonth + hyphen + year;


}

function monthIncrements(month) {
  let nextDate = "01";
  let nextMonth;

  if (month === "12") {
    nextMonth = "01";
  } else {
    nextMonth = parseInt(month) + 1 + "";
  }

  nextMonth = nextMonth.padStart(2, "0");
  return nextDate + "-" + nextMonth;
}

function leapYear(year) {
  if (year !== "0000") {
    const yearNotDivisibleBy100 = year % 100 !== 0;
    const yearDivisibleBy4 = year % 4 === 0;
    const yearDivisibleBy400 = year % 400 === 0;

    const isLeapYear = yearNotDivisibleBy100 ? yearDivisibleBy4 : yearDivisibleBy400;
    return isLeapYear;
  }

  return false;
}

function resultMessage(gist, date, expected, actual) {
  const symbol = expected === actual ? "✅" : "❌";

  if (symbol === "❌") {
    const values = outputFragment(date, expected, actual);
    return symbol + gist + values;
  }

  return symbol + gist;
}

function outputFragment(date, expected, actual) {
  return " '" + date + "' expected : " + expected + " actual : " + actual;
}

function testNextDate(gist, date, expected) {
  const actual = nextDate(date);
  const message = resultMessage(gist, date, expected, actual);

  console.log(message);
}

function testCasesOnDate() {
  console.log("'test cases on date :'");

  testNextDate("normal date increments", "15-04-2025", "16-04-2025");
  testNextDate("30 days increments 29 to 30", "29-01-2025", "30-01-2025");
  testNextDate("31 days last increments 30 to 31", "30-01-2025", "31-01-2025");
}

function testCasesOnMonth() {
  console.log("\n'test cases on month :'");
  testNextDate("31 days last to next month increments", "31-01-2025", "01-02-2025");
  testNextDate("30 days last to next month increments", "30-04-2025", "01-05-2025");
}

function allTestCases() {
  testCasesOnDate();
  testCasesOnMonth();
  testNextDate("february leap year 28 to 29", "28-02-2024", "29-02-2024");
  testNextDate("february leap year", "29-02-2024", "01-03-2024");
  testNextDate("february non leap year", "28-02-2025", "01-03-2025");
  testNextDate("Convert to new year by one vaue in year increments ", "31-12-1884 ", "01-01-1885");
  testNextDate("Convering to first new year", "31-12-0001", "01-01-0002");
  testNextDate("Convering to first new year", "31-12-0999", "01-01-1000");
  testNextDate("Year is in zeroes", "28-02-0000", "01-03-0000");
  testNextDate("Normal day in feb", "02-02-2025", "03-02-2025");
  testNextDate("Date is zero", "00-01-1994", "Invalid Date");
  testNextDate("Date is more than 31days", "32-01-1111", "Invalid Date");
  testNextDate("Month is zero ", "01-00-1445", "Invalid Date");
  testNextDate("Month exceeds more than 12", "01-13-2025", "Invalid Date");
  testNextDate("Year is exceeding more than four values", "31-12-9999", "Invalid Date");
  testNextDate("date is exceeding 30days in month", "31-04-9999", "Invalid Date");
  testNextDate("date is exceeding 30days in month", "01-04-9999", "02-04-9999");
  testNextDate("date is exceeding 31days in month", "32-01-9999", "Invalid Date");
  testNextDate("nonleap year 29 days", "29-02-2001", "Invalid Date");
  testNextDate("leap year 30 days", "30-02-2000", "Invalid Date");
  testNextDate("all zeroes", "00-00-0000", "Invalid Date");

}

allTestCases();