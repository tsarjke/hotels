import React from 'react';
import cl from './TextInput.module.css';

export interface InputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, name?: string) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  placeholder?: string;
  label?: string;
  error?: boolean;
  errorText?: string;
  name: string;
  type?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    value, placeholder, label, error, errorText, name, type, onBlur, onFocus, onChange,
  }, ref) => (
    <div className={cl.container}>
      <label htmlFor={name} className={error ? [cl.inputLabel, cl.error].join(' ') : cl.inputLabel}>
        {label}
        <input
          id={name}
          type={type}
          className={cl.textInput}
          ref={ref}
          value={value}
          onChange={onChange ? (event) => onChange(event, name) : () => null}
          onBlur={onBlur || (() => null)}
          onFocus={onFocus || (() => null)}
          placeholder={placeholder}
          required={type === 'date'}
        />
      </label>
      <span className={cl.errorText}>{error ? errorText : ''}</span>
    </div>
  ),
);

TextInput.defaultProps = {
  value: undefined,
  onChange: () => null,
  onBlur: () => null,
  onFocus: () => null,
  placeholder: '',
  label: '',
  error: false,
  errorText: '',
  type: 'text',
};

export default TextInput;
