import ItemReport from "@/app/types/Report/ItemReport";
import { DragEvent } from "react";

const DraggableComponent = ({ ...fields }: { [key: string]: any }) => {
  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("item", JSON.stringify({ ...fields }));
  };

  return {
    handleDragStart,
  };
};

export default DraggableComponent;
