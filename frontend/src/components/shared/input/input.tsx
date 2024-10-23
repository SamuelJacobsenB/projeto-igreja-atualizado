import React from "react";
import "./styles.scss";

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  required: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  placeholder,
  minLength,
  maxLength,
  required,
  value,
  onChange,
  icon,
}: InputProps) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <div className="input_area">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
        />
        <div className="icon">{icon}</div>
      </div>
    </div>
  );
};

export default Input;
