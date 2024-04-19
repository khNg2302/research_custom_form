"use client";

import useDropList from "@/app/hooks/Report/useDropList";
import Button from "../Button";

interface DropListProps {
  values: undefined | any;
}

const DropList = ({ values }: DropListProps) => {
  const { list, handleDropObjectTransfer, handleDragOver, renderList } =
    useDropList();
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
      }}
      className="flex-box"
      onDrop={handleDropObjectTransfer}
      onDragOver={handleDragOver}
    >
      {renderList(values)}
      <Button
        onClick={() => {
          console.log(list);
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default DropList;
