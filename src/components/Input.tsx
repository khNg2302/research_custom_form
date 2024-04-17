"use client";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { AppTheme } from "./AppPage";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > , AppTheme {
  label?: string;
  value?: string | number;
}

const Input = ({ label, value, theme,...res }: InputProps) => {
  return (
    <label className="input-field" data-theme={theme}>
      {label && <h3>{label}</h3>}
      <input {...res} />
    </label>
  );
};

export default Input;
