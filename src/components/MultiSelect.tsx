import OptionSelect from "@/app/types/Form/OptionSelect";
import Checkbox from "./Checkbox";
import HandleChange from "@/app/types/HandleChange";
import { FormFieldProps } from "semantic-ui-react";
import { AppTheme } from "./AppPage";
import { ChangeEvent } from "react";
import returnNewArray from "@/utils/returnNewArray";
import useFormField from "@/app/hooks/Form/FormFields/useFormField";

interface MultiSelectProps extends FormFieldProps, AppTheme {
  options: OptionSelect[];
  handleChange: HandleChange;
  label: string;
}

const MultiSelect = ({
  options,
  handleChange,
  label,
  theme,
  value,
  name,
  handleFocus,
  ...res
}: MultiSelectProps) => {
  const { errorMessage } = useFormField({ ...res });
  const handleChangeSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      handleChange({
        name,
        value: returnNewArray(value || [], e.target.value) as any,
      });
    }

    if (!e.target.checked) {
      handleChange({
        name,
        value: value.filter((item: string | number) => item !== e.target.value),
      });
    }
  };
  return (
    <label className="select-field" data-theme={theme} onClick={handleFocus}>
      <h3>{label ? label : "Label"}</h3>
      <div className="flex-col gap-inner">
        {options.map((option) => (
          <div className="checkbox-field flex-row flex-row gap" key={option.id}>
            <input
              name={name}
              type="checkbox"
              value={option.value}
              onChange={handleChangeSelect}
            />
            <label data-theme={theme}>
              <h3>{option.label ? option.label : "Label"}</h3>
            </label>
          </div>
        ))}
      </div>
      <p>{errorMessage}</p>
    </label>
  );
};

export default MultiSelect;
