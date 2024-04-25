"use client";
import useDropArea from "@/app/hooks/Report/useDropArea";
import DropAreaProps from "@/app/types/hooks/RepeatedRender/Report/DropArea";

const DropArea = ({
  activeLayoutId,
  layoutId,
  handleDrop,
  handleSetActiveLayoutId,
}: DropAreaProps) => {
  const { className } = useDropArea({
    layoutId,
    handleDrop,
    activeLayoutId,
    handleSetActiveLayoutId,
  });
  return (
    <div
      id={layoutId + ""}
      onDragEnter={(e) => {
        console.log('enter', layoutId)
        handleSetActiveLayoutId(+e.currentTarget.id);
      }}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className={`${className} box`}
    >
      Drop here
    </div>
  );
};

export default DropArea;
