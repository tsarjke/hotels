/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { fetctHotelsInfoRequest, setSearchData } from '../../store/reducers/hotel/hotelSlice';
import { getCheckOut, getCurrentDate } from '../../utils/prepareDate';
import Form from '../UI/Form/Form';
import Panel from '../UI/Panel/Panel';

import cl from './SearchPanel.module.css';

const SearchPanel: React.FC = () => {
  const dispatch = useAppDispatch();

  const locationRef = useRef<HTMLInputElement | null>(null);
  const checkInRef = useRef<HTMLInputElement | null>(null);
  const daysRef = useRef<HTMLInputElement | null>(null);

  const searchHotels = (event?: React.FormEvent) => {
    if (event) {
      event.preventDefault();
    }
    const checkIn = checkInRef.current?.value;
    const days = daysRef.current?.value;
    const location = locationRef.current?.value;
    if (checkIn && days && location) {
      // dispatch(fetctHotelsInfoRequest({ checkOut: getCheckOut(checkIn, days), checkIn, days, location }));
      console.log({
        checkOut: getCheckOut(checkIn, days), checkIn, days, location,
      });
      dispatch(setSearchData({ checkIn, days, location }));
    }
  };

  useEffect(() => {
    if (checkInRef.current && daysRef.current && locationRef.current) {
      checkInRef.current.value = getCurrentDate();
      daysRef.current.value = '1';
      locationRef.current.value = 'Москва';
      searchHotels();
    }
  }, []);

  const inputsData = [
    {
      label: 'Локация',
      placeholder: 'Москва',
      name: 'location',
      ref: locationRef,
    },
    {
      label: 'Дата заселения',
      placeholder: '15.10.2022',
      name: 'checkIn',
      ref: checkInRef,
      type: 'date',
    },
    {
      label: 'Количество дней',
      placeholder: '1',
      name: 'days',
      ref: daysRef,
    },
  ];

  return (
    <Panel className={cl.container}>
      <Form bntText="Найти" submit={searchHotels} inputsData={inputsData} />
    </Panel>
  );
};

export default SearchPanel;
