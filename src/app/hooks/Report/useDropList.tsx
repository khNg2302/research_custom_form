import HandleChangeArrayObject from "@/app/types/HandleChangeArrayObject";
import ComponentTransferType from "@/app/types/Report/ComponentTransferType";
import ReportComponents from "@/consts/ReportComponents";
import returnNewArray from "@/utils/returnNewArray";
import updateArrayObject from "@/utils/updateArrayObject";
import { DragEvent, useState } from "react";

const useDropList = () => {
  const [list, setList] = useState<ComponentTransferType[]>([]);

  const addToList = (newItem: any) => {
    setList([...returnNewArray(list, newItem)]);
  };

  const handleDropObjectTransfer = (e: DragEvent<HTMLDivElement>) => {
    const dataTransfer = JSON.parse(e.dataTransfer.getData("itemData"));
    addToList(dataTransfer);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleUpdateItem: HandleChangeArrayObject = ({
    name,
    value,
    indexObject,
  }) => {
    setList([...updateArrayObject(list, { name, value, indexObject })]);
  };

  const renderList = (values: any) => {
    return list.map((item, index) => {
      const { type, ...props } = item;
      const Component = ReportComponents[item.type] as any;
      return (
        <Component
          handleUpdateItem={handleUpdateItem}
          key={item.id}
          {...props}
          value={values[item.value_field_name]}
          indexObject={index}
          reportFields={[
            {
              key: "n",
              value: "name",
              text: "Name",
            },
            {
              key: "p",
              value: "price",
              text: "Price",
            },
          ]}
        />
      );
    });
  };

  return {
    list,
    addToList,
    renderList,
    handleUpdateItem,
    handleDropObjectTransfer,
    handleDragOver,
  };
};

export default useDropList;
