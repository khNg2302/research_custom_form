import HandleChange from "@/app/types/HandleChange";
import HandleChangeArrayObject from "@/app/types/HandleChangeArrayObject";
import ComponentTransferType from "@/app/types/Report/ComponentTransferType";
import ReportComponents from "@/consts/ReportComponents";
import { DragEvent, useState } from "react";

const useDropItem = ({
  handleUpdateItem,
  indexObject,
}: {
  handleUpdateItem: HandleChangeArrayObject;
  indexObject: number;
}) => {
  const [item, setItem] = useState<null | ComponentTransferType>(null);



  const renderItem = (value: any) => {
    if (!item) return null;
    const { type, ...props } = item;
    const Component = ReportComponents[item.type] as any;

    return <Component {...props} value={value}   />;
  };

  const handleChangePropertiesItem: HandleChange = ({ name, value }) => {
    handleUpdateItem({ name, value, indexObject });
  };
  
  return {
    item,
    handleChangePropertiesItem,
    renderItem,
  };
};

export default useDropItem;
