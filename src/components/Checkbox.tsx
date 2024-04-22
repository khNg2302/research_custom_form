"use client";
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { AppTheme } from "./AppPage";
import useFormField from "@/app/hooks/Form/FormFields/useFormField";
import FormFieldProps from "@/app/types/Form/FormField";

interface CheckboxProps
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

const Checkbox = ({
  label,
  value,
  theme,
  handleFocus,
  ...res
}: CheckboxProps) => {
  const { errorMessage, hanleEventChange, handleChange } = useFormField({
    value,
    ...res,
  });
  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      hanleEventChange(e);
    } else {
      if (res.name) handleChange({ name: res.name as string, value: "false" });
    }
  };
  return (
    <div className="checkbox-field flex-row" onClick={handleFocus}>
      <input
        type="checkbox"
        {...res}
        value="true"
        onChange={handleChangeCheckbox}
      />
      <label data-theme={theme}>
        <h3>{label ? label : "Label"}</h3>
      </label>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Checkbox;
