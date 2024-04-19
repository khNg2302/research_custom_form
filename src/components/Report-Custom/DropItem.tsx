import useDropItem from "@/app/hooks/Report/useDropItem";
import FieldValue from "@/app/types/Fieldvalue";
import HandleChange from "@/app/types/HandleChange";
import { ReactNode, SyntheticEvent } from "react";
import { DropdownItemProps, DropdownProps, Select } from "semantic-ui-react";

const DropItem = ({
  reportFields,
  value,
  handleUpdateItem,
  indexObject,
  children,
}: {
  value: any;
  reportFields: DropdownItemProps[];
  handleUpdateItem: HandleChange;
  indexObject: number;
  children: ({ value }: { value: FieldValue }) => ReactNode;
}) => {
  const { handleChangePropertiesItem } = useDropItem({
    handleUpdateItem,
    indexObject,
  });

  const handleChangeValueField = (
    _: SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    handleChangePropertiesItem({
      name: "value_field_name",
      value: data.value as string,
    });
  };

  return (
    <>
      <div>
        <Select onChange={handleChangeValueField} options={reportFields} />
      </div>
      <div>{children({ value })}</div>
    </>
  );
};

export default DropItem;
