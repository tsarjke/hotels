import React, { useMemo } from 'react';

import cl from './Price.module.css';

interface PriceProps {
  currency: string;
  amount: string;
}

const formatPrice = (amount: string, currency: string) => {
  const match: RegExpMatchArray | null = amount.match(/^(.*?)((?:[,.]\d+)?|)$/);
  if (match) {
    const [, num] = match;
    return `${num.replace(/\B(?=(?:\d{3})*$)/g, ' ')} ${currency}`;
    // С дробной частью
    // const [, num, suffix] = match;
    // return `${num.replace(/\B(?=(?:\d{3})*$)/g, ' ')}${suffix} ${currency}`;
  }
  return null;
};

const Price: React.FC<PriceProps> = ({ currency, amount }) => {
  const formattedAmount = useMemo(() => formatPrice(amount, currency), [amount]);
  return <p className={cl.price}>{formattedAmount}</p>;
};

export default Price;
