import React from "react";
import { TextAreaProps } from "./TextArea.types";
import "./textArea.css";

const TextArea: React.FC<TextAreaProps> = ({
  rows,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
export default TextArea;