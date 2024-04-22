import HandleChange from "@/app/types/HandleChange";
import HandleChangeArrayObject from "@/app/types/HandleChangeArrayObject";
import Button from "@/components/Button";
import Input from "@/components/Input";
import returnNewArray from "@/utils/returnNewArray";
import updateMultiFieldsArrayObject from "@/utils/updateMultiFieldsArrayObject";

let id = Math.random() * 10;

const OptionsSelect = ({
  name,
  handleChange,
  value,
}: {
  name: string;
  handleChange: HandleChange;
  value: any;
}) => {
  const addNewOption = () => {
    console.log(value);
    handleChange({
      name,
      value: returnNewArray(value, { id: id++, key: "", label: "", value:'' }) as any,
    });
  };

  const handleChangePropertiesOfOption: HandleChangeArrayObject = ({
    name: labelName,
    value: labelInput,
    indexObject,
  }) => {
    handleChange({
      name,
      value: updateMultiFieldsArrayObject(value, {
        values: {
          [labelName]: labelInput,
          value: labelInput.toString().toLowerCase().replace(" ", "_"),
        },
        indexObject,
      }) as any,
    });
  };
  return (
    <div>
      <h6>Options</h6>
      <Button label="Add +" onClick={addNewOption} />
      <>
        {value.map((option, index) => (
          <div key={option.id} className="flex-col box">
            <>
              <Input
                name="label"
                label={"Option " + (index + 1)}
                value={option.label}
                handleChange={({ name, value }) => {
                  handleChangePropertiesOfOption({
                    name,
                    value,
                    indexObject: index,
                  });
                }}
              />
            </>
          </div>
        ))}
      </>
    </div>
  );
};

export default OptionsSelect;
