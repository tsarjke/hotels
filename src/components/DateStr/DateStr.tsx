import React from 'react';
import { getRusDate } from '../../utils/prepareDate';

import cl from './DateStr.module.css';

interface DateStrProps {
  date: string;
  classname?: string;
}

const DateStr: React.FC<DateStrProps> = ({ date, classname }) => {
  const rusDate = getRusDate(date);
  const classes = rusDate === 'Некорректная дата' ? [classname, cl.error].join(' ') : classname;
  return <span className={classes}>{rusDate}</span>;
};

DateStr.defaultProps = {
  classname: '',
};

export default DateStr;
