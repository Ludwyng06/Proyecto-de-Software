function isDayBooked(date, bookedDates, today) {
  const d = date.toISOString().slice(0, 10);
  const isSameOrAfterToday = (a, b) =>
    a.getFullYear() > b.getFullYear() ||
    (a.getFullYear() === b.getFullYear() && a.getMonth() > b.getMonth()) ||
    (a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() >= b.getDate());
  return bookedDates.includes(d) && isSameOrAfterToday(date, today);
}

function isDayFree(date, bookedDates, today) {
  const d = date.toISOString().slice(0, 10);
  const isSameOrAfterToday = (a, b) =>
    a.getFullYear() > b.getFullYear() ||
    (a.getFullYear() === b.getFullYear() && a.getMonth() > b.getMonth()) ||
    (a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() >= b.getDate());
  return !bookedDates.includes(d) && isSameOrAfterToday(date, today);
}

module.exports = { isDayBooked, isDayFree }; 