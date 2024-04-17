import CustomFields from "@/app/types/Form/CustomField";
import HandleChange from "@/app/types/Form/HandleChange";
import Input from "@/components/Form-Custom/Input";

const PropertiesFieldChange = ({
  customField,
  handleChange,
}: {
  customField: CustomFields;
  handleChange: HandleChange;
}) => {
  return (
    <div>
      {customField && (
        <>
          <Input
            name="field_name"
            value={customField.field_name}
            label="Field name"
            handleChange={handleChange}
          />
          {customField.label !== undefined && (
            <Input
              name="label"
              value={customField.label}
              label="Label"
              handleChange={handleChange}
            />
          )}

          {customField.placeholder !== undefined && (
            <Input
              name="placeholder"
              value={customField.placeholder}
              label="Placeholder"
              handleChange={handleChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PropertiesFieldChange;
