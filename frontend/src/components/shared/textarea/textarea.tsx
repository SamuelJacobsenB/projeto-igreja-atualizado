import React from "react";
import TextAreaBtn from "./btn/btn";
import "./styles.scss";
import DefaultBtnArea from "./btn/default";

interface TextareaProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  setValue,
  value,
  name,
  label,
  placeholder,
  className,
  required,
}: TextareaProps) => {
  return (
    <div className={`textarea_box ${className}`}>
      <label htmlFor={name}>{label}</label>
      <div className="textarea">
        <div className="btn_area">
          <DefaultBtnArea setValue={setValue} value={value} />
        </div>
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};

export default Textarea;
