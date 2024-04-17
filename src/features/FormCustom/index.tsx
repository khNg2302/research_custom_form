import useForm from "@/app/hooks/Form/useForm";
import { ArrayObjectField, ObjectField } from "@/app/types/ObjectField";
import Form from "./Form";
import FieldSelection from "./FieldSelection";
import CustomFields from "@/app/types/Form/CustomField";
import HandleSubmit from "@/app/types/Form/HandleSubmit";
import PropertiesFieldChange from "./PropertiesFieldChange";
import HandleChange from "@/app/types/Form/HandleChange";
import { useState } from "react";

const FormCustom = () => {
  const handleSubmitForm = async (data: ObjectField) => {
    console.log("run submit");
    console.log(data);
  };

  const handleSubmitCustomFields = async (data: ArrayObjectField) => {
    console.log(data);
  };
  const initialDefaultForm = {
    customer_name: "",
  };

  const initialDefaultCustomFields: CustomFields[] = [];

  const { data, handleObjectFieldsChangeEvent, ...props } = useForm({
    initialDefault: initialDefaultForm,
    handleSubmit: handleSubmitForm as HandleSubmit<ObjectField>,
  });

  const {
    data: customFields,
    handleAddArrayObjectChangeEvent,
    handleArraySpecificObjectChangeEvent,
  } = useForm({
    initialDefault: initialDefaultCustomFields,
    handleSubmit: handleSubmitCustomFields,
  });

  const [customFieldsIndex, setCustomFieldsIndex] = useState<number | null>(
    null
  );

  const handleSpecificCustomFieldChange: HandleChange = ({ name, value }) => {
    handleArraySpecificObjectChangeEvent({
      value,
      name,
      indexObject: customFieldsIndex as number,
    });
  };
  const handleFocusFieldForm = (customFieldsIndex: number) => {
    setCustomFieldsIndex(customFieldsIndex);
  };
  return (
    <div className="flex flex-row box justify-between">
      <FieldSelection handleAddCustomField={handleAddArrayObjectChangeEvent} />
      <Form
        {...props}
        handleFocus={handleFocusFieldForm}
        custom_fields={customFields as CustomFields[]}
        data={data as ObjectField}
        handleChange={handleObjectFieldsChangeEvent}
      />
      <PropertiesFieldChange
        customField={customFields[customFieldsIndex as number] as CustomFields}
        handleChange={handleSpecificCustomFieldChange}
      />
    </div>
  );
};

export default FormCustom;
