"use client";
import useFormField from "@/app/hooks/Form/FormFields/useFormField";
import FormFieldProps from "@/app/types/Form/FormField";
import { memo } from "react";
import { Input, InputProps } from "semantic-ui-react";

interface InputFieldProps extends FormFieldProps, InputProps {}

const InputCustom = ({ ...props }: InputFieldProps) => {
  const { errorMessage, hanleEventChange } = useFormField({ ...props });

  return (
    <>
      <Input
        {...props}
        label={props.label || 'Label'}
        name={props.name}
        value={props.value || ""}
        onChange={hanleEventChange}
        onFocus={props.handleFocus}
      />
      <p>{errorMessage}</p>
    </>
  );
};

export default memo(InputCustom);
