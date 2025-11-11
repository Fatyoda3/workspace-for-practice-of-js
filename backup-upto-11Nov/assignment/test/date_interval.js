// problem statement - given two dates give the difference between them 
// 02-07-2024 and 14-07-2024

function isLeapYear(year) {
  return year !== 0 && year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

function DayCount30or31(month) {
  const monthWith31Days = '01,03,05,07,08,10,12';
  return monthWith31Days.includes(month) ? 31 : 30;
}

function interval(from, to) {

}