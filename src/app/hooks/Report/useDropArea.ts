import DropAreaProps from "@/app/types/hooks/RepeatedRender/Report/DropArea";
import { DragEvent, useEffect, useState } from "react";

const useDropArea = ({
  activeLayoutId,
  layoutId,
  handleDrop,
}: DropAreaProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const [className, setClassName] = useState("drop hidden");

  useEffect(() => {
    if (layoutId === activeLayoutId) {
      setIsHidden(true);
      setClassName("drop display");
    }
    if (activeLayoutId === null || layoutId !== activeLayoutId) {
      setIsHidden(false);
      setClassName("drop hidden");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLayoutId]);

  return { isHidden, className, handleDrop };
};

export default useDropArea;
