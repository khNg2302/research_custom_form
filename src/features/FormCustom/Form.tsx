import CustomFields from "@/app/types/Form/CustomField";
import FormFieldProps from "@/app/types/Form/FormField";
import HandleSetStatus from "@/app/types/Form/HandleSetStatus";
import { ObjectField } from "@/app/types/ObjectField";
import Button from "@/components/Button";
import Input from "@/components/Form-Custom/Input";
import FormFields from "@/consts/FormField";

interface FormProps extends Omit<FormFieldProps, "value"> {
  custom_fields: CustomFields[];
  data: ObjectField;
}

const Form = ({ data, custom_fields, ...props }: FormProps) => {
  const handleSubmit = () => {
    const changeStatus = props.handleSetStatus as HandleSetStatus;
    changeStatus("validating");
  };

  const handleFocusField = (indexField:number) => {
    const focus = props.handleFocus as any
    focus(indexField)
  }

  return (
    <form>
      <Input
        status={props.status}
        name="customer_name"
        label="Custom name"
        value={data.customer_name}
        handleChange={props.handleChange}
      />
      {custom_fields.map((item, index) => {
        const Field = FormFields[item.type];
        return (
          <Field
            {...props}
            label={item.label}
            placeholder={item.placeholder}
            key={item.field_name}
            name={item.field_name}
            value={data[item.field_name]}
            handleChange={props.handleChange}
            lastField={index === custom_fields.length - 1}
            index={index}
            handleFocus={()=>handleFocusField(index)}
          />
        );
      })}
      <Button
        label="Submit"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default Form;
