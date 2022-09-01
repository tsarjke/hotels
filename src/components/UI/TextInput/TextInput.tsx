import React from 'react';
import cl from './TextInput.module.css';

export interface InputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  innerRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  label?: string;
  error?: string;
}

const TextInput: React.FC<InputProps> = ({
  value,
  onChange,
  innerRef,
  placeholder,
  label,
  error,
}) => (
  <div className={cl.container}>
    <label htmlFor={placeholder} className={cl.inputLabel}>
      {label}
      <input
        id={placeholder}
        type="text"
        className={cl.textInput}
        ref={innerRef}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
    <span className={cl.error}>{error}</span>
  </div>
);

TextInput.defaultProps = {
  value: undefined,
  onChange: () => null,
  innerRef: undefined,
  placeholder: '',
  label: '',
  error: '',
};

export default TextInput;
