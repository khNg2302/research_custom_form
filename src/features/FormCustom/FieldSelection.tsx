import CustomFields from "@/app/types/Form/CustomField";
import HandleAddCustomField from "@/app/types/Form/HandleAddCustomField";
import { useRef } from "react";
import FieldName from "./FieldName";
import FieldTypeSelect from "@/app/types/Form/FieldTypeSelect";

const FieldSelection = ({
  handleAddCustomField,
}: {
  handleAddCustomField: HandleAddCustomField;
}) => {

  const customFields = useRef<FieldTypeSelect[]>([
    {
      name: "Input",
      valueCustomField: {
        field_name: "",
        type: "input",
        label: "",
      },
    },
    {

      name: "Select",
      valueCustomField: {
        field_name: "",
        type: "select",
        label: "",
        options:[]
      },
    },
    {

      name: "Checkbox",
      valueCustomField: {
        field_name: "",
        type: "checkbox",
        label: ""
      },
    },
    {

      name: "Multi Select",
      valueCustomField: {
        field_name: "",
        type: "multiSelect",
        label: "",
        options:[]
      },
    },
  ]);
  return (
    <div className="box flex-row">
      {customFields.current.map((item) => (
        <FieldName
          key={item.name}
          name={item.name}
          field={item.valueCustomField}
          handleAddCustomField={handleAddCustomField}
        />
      ))}
    </div>
  );
};

export default FieldSelection;
