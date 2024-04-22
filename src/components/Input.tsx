"use client";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { AppTheme } from "./AppPage";
import useFormField from "@/app/hooks/Form/FormFields/useFormField";
import FormFieldProps from "@/app/types/Form/FormField";

interface InputProps
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    AppTheme,
    FormFieldProps {
  label?: string;
  value: string | number;
  handleFocus?: () => void;
}

const Input = ({ label, value, theme, handleFocus, ...res }: InputProps) => {
  const { errorMessage, hanleEventChange } = useFormField({ value, ...res });
  return (
    <label className="input-field" data-theme={theme}>
      <h3>{label ? label : "Label"}</h3>
      <input
        value={value}
        {...res}
        onChange={hanleEventChange}
        onFocus={handleFocus}
      />
      <p>{errorMessage}</p>
    </label>
  );
};

export default Input;
