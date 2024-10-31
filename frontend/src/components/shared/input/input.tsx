"use client";

import React, { useRef } from "react";
import "./styles.scss";

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  required: boolean;
  value: any;
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
  const input: any = useRef();

  const focus = (): void => {
    input.current.focus();
  };

  return (
    <div className="input">
      <label htmlFor={name} onClick={focus}>
        {label}
      </label>
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
          ref={input}
        />
        <div className="icon">{icon}</div>
      </div>
    </div>
  );
};

export default Input;
