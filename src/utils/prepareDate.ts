export const getCheckOut = (checkIn: string, days: string) => {
  const [checkInYear, checkInMonth, checkInDay] = checkIn.split('-');
  const date = new Date(+checkInYear, +checkInMonth - 1, +checkInDay + +days);
  const [checkOutMonth, checkOutDay, checkOutYear] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];
  return `${checkOutYear}-${`0${checkOutMonth + 1}`.slice(-2)}-${`0${checkOutDay}`.slice(-2)}`;
};

export const getCurrentDate = () => {
  const date = new Date();
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  return `${year}-${`0${month + 1}`.slice(-2)}-${`0${day}`.slice(-2)}`;
};

export const getRusDate = (date: string) => {
  const [year, month, day] = date.split('-');
  const monthsRus = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  if (day && month && year) {
    return `${day} ${monthsRus[+month - 1]} ${year}`;
  }
  return 'Некорректная дата';
};
