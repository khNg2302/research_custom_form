import { DragEvent, VoidFunctionComponent } from "react";

type DropAreaProps = {
  activeLayoutId?: number |null;
  layoutId?: number;
  handleDrop?: (e: DragEvent<HTMLDivElement>) => void;
  handleSetActiveLayoutId: (layoutId: number | null) => void
};

export default DropAreaProps;
