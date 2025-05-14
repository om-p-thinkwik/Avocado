import type { FC, ChangeEvent } from 'react';

type InputTypes =
  | 'text'
  | 'email'
  | 'password'
  | 'tel'
  | 'number'
  | 'url'
  | 'search'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'time'
  | 'color';

interface TextFieldProps {
  id?: string;
  name?: string;
  type?: InputTypes;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  autoFocus?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  id = '',
  name = '',
  type = 'text',
  placeholder = '',
  disabled = false,
  value = '',
  onChange,
  className = '',
  required = false,
  autoFocus = false,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      required={required}
      autoFocus={autoFocus}
      className={`border rounded-lg px-3 py-2 m-2 outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};

export default TextField;
