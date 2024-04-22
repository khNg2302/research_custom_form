import OptionSelect from "@/app/types/Form/OptionSelect";
import { AppTheme } from "./AppPage";
import HandleChange from "@/app/types/HandleChange";
import useFormField from "@/app/hooks/Form/FormFields/useFormField";

interface SelectProps extends AppTheme {
  options: OptionSelect[];
  label?: string;
  value?: any;
  handleChange: HandleChange;
  handleFocus: () => void;
}

const Select = ({
  theme,
  label,
  value,
  options,
  handleFocus,
  ...res
}: SelectProps) => {
  const { errorMessage, hanleEventChange } = useFormField({ value, ...res });
  return (
    <label className="select-field" data-theme={theme}>
      <h3>{label ? label : "Label"}</h3>
      <select
        {...res}
        value={value}
        onChange={hanleEventChange}
        onFocus={handleFocus}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>{errorMessage}</p>
    </label>
  );
};

export default Select;
