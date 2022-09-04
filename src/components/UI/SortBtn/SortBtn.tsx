import React, { useEffect, useState } from 'react';
import { ISortOption } from '../../../types/types';

import cl from './SortBtn.module.css';

interface SortBtnProps {
  text?: string;
  name?: string;
  onCLick?: (sortOption: ISortOption) => void;
  parameter?: 'stars' | 'priceAvg';
}

const SortBtn = React.forwardRef<HTMLInputElement, SortBtnProps>(
  ({
    text, name, parameter, onCLick,
  }, ref) => {
    const [filter, setFilter] = useState<boolean | null>(null);

    useEffect(() => {
      if (ref && 'current' in ref && filter !== null) {
        if (ref.current?.checked) {
          const direction = filter ? 'asc' : 'desc';
          if (parameter && onCLick) {
            onCLick({ direction, parameter });
          }
        }
      }
    }, [filter]);

    const clickHandler = () => {
      setFilter(!filter);
    };

    return (
      <div className={cl.container}>
        <input ref={ref} type="radio" name={name} onClick={clickHandler} />
        <div className={cl.wrapper} />
        <div className={cl.content}>
          <h4 className={cl.text}>{text}</h4>
          <div className={cl.arrows}>
            <svg
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id={filter ? cl.filter : ''}
                d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z"
                fill="#41522E"
                fillOpacity="0.3"
              />
            </svg>
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id={filter === null || filter ? '' : cl.filter}
                d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z"
                fill="#41522E"
                fillOpacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  },
);

SortBtn.defaultProps = {
  text: '',
  name: '',
  onCLick: () => null,
  parameter: undefined,
};

export default SortBtn;
