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
        placeholder: "",
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
