import CustomFields from "@/app/types/Form/CustomField";
import HandleChange from "@/app/types/Form/HandleChange";

import OptionsSelect from "./OptionsSelect";
import Input from "@/components/Input";
import Button from "@/components/Button";

const PropertiesFieldChange = ({
  customField,
  handleChange,
}: {
  customField: CustomFields;
  handleChange: HandleChange;
}) => {
  return (
    <div className="flex-col box properties-custom-form ">
      <Button className="button-toggle">%</Button>
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

          {customField.options !== undefined && (
            <OptionsSelect
              name="options"
              value={customField.options}
              handleChange={handleChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PropertiesFieldChange;
