export const daysInMonth = (month: number, year: number) =>
  new Date(year, month + 1, 0).getDate();

export const daysInMonthArray = (month: number, year: number) =>
  Array.from({ length: daysInMonth(month, year) }, (_, i) => i + 1);

export const today = new Date();

export const todayYear = today.getFullYear();

export const todayMonth = today.getMonth();

export const todayDay = today.getDate();

export const months = [
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

export const years = [todayYear, todayYear + 1];
