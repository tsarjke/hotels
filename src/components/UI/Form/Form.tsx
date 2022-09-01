/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '../Button/Button';
import TextInput, { InputProps } from '../TextInput/TextInput';

import cl from './Form.module.css';

interface FormProps {
  bntText: string;
  inputsData: InputProps[];
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ bntText, inputsData, submit }) => (
  <form onSubmit={submit}>
    <div className={cl.inputsContainer}>
      {inputsData.map((inputProps) => (
        <TextInput key={[inputProps.label, inputProps.placeholder].join('')} {...inputProps} />
      ))}
    </div>
    <Button type="submit">{bntText}</Button>
  </form>
);

export default Form;
