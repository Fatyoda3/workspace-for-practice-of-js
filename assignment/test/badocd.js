function monthsWith31Days(date, month, year) {
  if (month === "12" && date === "31") {
    return increaseYear(year);
  }

  const ifTrue = increaseDate(date, month, year);
  const ifFalse = increaseMonth(month, year);

  return date <= "30" ? ifTrue : ifFalse;
}

function monthsWith30Days(date, month, year) {
  if (month === "02") {
    return `01-03-${year}`;
  }
  const ifTrue = increaseDate(date, month, year);
  const ifFalse = increaseMonth(month, year);
  return date <= "29" ? ifTrue : ifFalse;
}

function getDay(date) {
  return date.slice(0, 2);
}

function getMonth(date) {
  return date.slice(3, 5);
}

function getYear(date) {
  return date.slice(6, 10);
}

function padWith0(number, length = 2) {
  number = "" + number;
  return number.padStart(length, "0");
}

function increaseYear(year) {
  year = parseInt(year) + 1;
  return `01-01-${padWith0(year, 4)}`;
}

function increaseMonth(month, year) {
  month = parseInt(month) + 1;
  return `01-${padWith0(month)}-${year}`;
}

function increaseDate(date, month, year) {
  date = parseInt(date);
  date = padWith0(date + 1);
  return "" + ` ${padWith0(date)}-${month}-${year}`;
}

function isLeapYear(year) {
  if (year === "0000") {
    return false;
  }
  return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
}

function isMonthWith31Days(month) {
  const monthsWith31Days = "01,03,05,07,08,10,12";
  return monthsWith31Days.includes(month);
}

function isDaysOfMonthInvalid(date, month, year) {
  if (isMonthWith31Days(month)) {
    return date > "31";
  }
  const febDays = isLeapYear(year) ? "29" : "28";

  if (month === "02") {
    return date > febDays;
  }
  return date > "30";
}

function isInvalidDate(givenDate, date, month, year) {
  if (givenDate.length !== 10) {
    return true;
  }
  if (date <= "00" || date > "31" || month <= "00" || month > "12") {
    return true;
  }
  if (year.length !== 4) {
    return true;
  }
  return isDaysOfMonthInvalid(date, month, year);
}


function getNextDate(date, GivenDate, month, year) {
  if (isInvalidDate(date, GivenDate, month, year)) {
    return "Invalid Date";
  }
  if (GivenDate > "0" && GivenDate <= "27") {
    return increaseDate(GivenDate, month, year);
  }
  if (month === "02" && GivenDate <= "28") {
    return isLeapYear(year) ? `29-02-${year}` : `01-03-${year}`;
  }
  if (isMonthWith31Days(month)) {
    return monthsWith31Days(GivenDate, month, year);
  }
  return monthsWith30Days(GivenDate, month, year);
}

function nextDate(date) {
  const GivenDate = getDay(date);
  const month = getMonth(date);
  const year = getYear(date);
  const nextDateIs = getNextDate(date, GivenDate, month, year);

  if (nextDateIs.length > 10) {
    return "Invalid Date";
  }
  return nextDateIs;
}

function composeMessage(description, string, testResult, output) {
  const symbol = output === testResult ? "  ✅ " : "  ❌ ";
  let messege = description + " " + symbol + "  Input:[" + string;
  messege += "]" + "  ➡️  ";
  messege += "Output:" + testResult + "  ";
  messege += " | Expected:" + output;
  return messege;
}

function testNextDate(description, date, nextDayDate) {
  const result = nextDate(date);
  console.log(composeMessage(description, date, result, nextDayDate));
}

function testCases1() {
  testNextDate(" ", '29-02-2025', 'Invalid Date');
  testNextDate(" ", '29-11-2021', '30-11-2021');
  testNextDate(" ", '31-01-2025', '01-02-2025');
  testNextDate(" ", '29-02-2024', '01-03-2024');
  testNextDate(" ", '30-02-2024', 'Invalid Date');
  testNextDate(" ", '30-01-2025', '31-01-2025');
  testNextDate(" ", '28-02-2020', '29-02-2020');
  testNextDate(" ", '28-02-2021', '01-03-2021');
  testNextDate(" ", '31-03-2025', '01-04-2025');
  testNextDate(" ", '30-04-2025', '01-05-2025');
  testNextDate(" ", '31-05-2025', '01-06-2025');
  testNextDate(" ", '30-06-2025', '01-07-2025');
}

function testCases2() {
  testNextDate(" ", '31-07-2025', '01-08-2025');
  testNextDate(" ", '31-08-2025', '01-09-2025');
  testNextDate(" ", '30-09-2025', '01-10-2025');
  testNextDate(" ", '31-10-2025', '01-11-2025');
  testNextDate(" ", '30-11-2025', '01-12-2025');
  testNextDate(" ", '31-12-2025', '01-01-2026');
  testNextDate(" ", '28-02-2300', '01-03-2300');
  testNextDate(" ", '28-02-1900', '01-03-1900');
  testNextDate(" ", '28-02-2024', '29-02-2024');
  testNextDate(" ", '31-04-2025', 'Invalid Date');
  testNextDate(" ", '31-06-2025', 'Invalid Date');
  testNextDate(" ", '30-03-2025', '31-03-2025');
}

function testCases3() {
  testNextDate(" ", '31-12-9999', 'Invalid Date');
  testNextDate(" ", '31-12-2029', '01-01-2030');
  testNextDate(" ", '32-08-2020', 'Invalid Date');
  testNextDate(" ", '08-19-2020', 'Invalid Date');
  testNextDate(" ", '32-13-2020', 'Invalid Date');
  testNextDate(" ", '30-09-0000', '01-10-0000');
  testNextDate(" ", '31-12-0000', '01-01-0001');
  testNextDate(" ", '00-00-0000', 'Invalid Date');
  testNextDate(" ", '10-00-0000', 'Invalid Date');
}

function testCases4() {
  testNextDate("", "01-01-0001", "02-01-0001");
  testNextDate("", "06-10-2006", "07-10-2006");
  testNextDate("", "28-02-2025", "01-03-2025");
  testNextDate("", "28-02-2000", "29-02-2000");
  testNextDate("", "30-07-2025", "31-07-2025");
  testNextDate("", "30-08-2025", "31-08-2025");
  testNextDate("", "31-12-2025", "01-01-2026");
  testNextDate("", "31-01-2025", "01-02-2025");
  testNextDate("", "30-04-2025", "01-05-2025");
}

function testCases5() {
  testNextDate("", "31-12-9999", "Invalid Date");
  testNextDate("", "31-13-1900", "Invalid Date");
  testNextDate("", "00-12-1900", "Invalid Date");
  testNextDate("", "01-00-1900", "Invalid Date");
  testNextDate("", "32-01-1900", "Invalid Date");
  testNextDate("", "29-02-2002", "Invalid Date");
  testNextDate("", "30-02-2004", "Invalid Date");
  testNextDate("", "31-04-2004", "Invalid Date");
  testNextDate("", "29-02-0000", "Invalid Date");
  testNextDate("", "02-02-0000", "03-02-0000");
}

function testCases6() {
  testNextDate("", "28-02-2025", "01-03-2025");
  testNextDate("", "29-02-2000", "01-03-2000");
  testNextDate("", "31-12-9999", "Invalid Date");
  testNextDate("", "31-12-9999", "Invalid Date");
  testNextDate("", "01-01-999", "Invalid Date");
  testNextDate("", "35-01-2025", "Invalid Date");
  testNextDate("", "00-01-2025", "Invalid Date");
  testNextDate("", "06-13-2025", "Invalid Date");
  testNextDate("", "31-00-2025", "Invalid Date");
  testNextDate("", "01-01-0000", "02-01-0000");
  console.log("\n");
}

testCases1();
testCases2();
testCases3();
testCases4();
testCases5();