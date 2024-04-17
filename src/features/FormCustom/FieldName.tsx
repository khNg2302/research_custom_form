import CustomFields from "@/app/types/Form/CustomField";
import HandleAddCustomField from "@/app/types/Form/HandleAddCustomField";
import Button from "@/components/Button";

const FieldName = ({
  name,
  field,
  handleAddCustomField,
}: {
  name: string;
  field: CustomFields;
  handleAddCustomField: HandleAddCustomField;
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <Button label="+" onClick={() => handleAddCustomField(field)} />
    </div>
  );
};

export default FieldName;
