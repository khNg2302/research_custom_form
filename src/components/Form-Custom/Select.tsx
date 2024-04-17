import useFormField from "@/app/hooks/Form/FormFields/useFormField";
import FormFieldProps from "@/app/types/Form/FormField";
import { Select, SelectProps } from "semantic-ui-react";

interface SelectFieldProps extends Omit<SelectProps, "value">, FormFieldProps {}

const SelectCustom = ({ ...props }: SelectFieldProps) => {
  const { errorMessage, hanleEventChange } = useFormField({ ...props });
  return (
    <>
      <Select
        options={props.options}
        name={props.name}
        onChange={hanleEventChange}
        {...props}
        value={props.value}
        placeholder={props.placeholder}
        onFocus={()=>props.handleFocus(props.index)}
      />
      <p>{errorMessage}</p>
    </>
  );
};

export default SelectCustom;
