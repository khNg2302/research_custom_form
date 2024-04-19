"use client";
import ComponentTransferType from "@/app/types/Report/ComponentTransferType";
import { DragEvent, ReactNode } from "react";

const ItemOfSelection = ({
  name,
  children,
  item,
}: {
  name?: string;
  children?: ReactNode;
  item: ComponentTransferType;
}) => {
  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("itemData", JSON.stringify(item));
  };
  return (
    <div draggable onDragStart={handleDrag}>
      {name}
      {children}
    </div>
  );
};

export default ItemOfSelection;
