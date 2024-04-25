import { DragEvent, ReactNode } from "react";

type ToolItemReportProps = {
  handleDelete?: () => void;
  handleSetActiveLayoutId?: (layoutId: number) => void;
  handleDragStart?: (e: DragEvent<HTMLDivElement>) => void;
};

export default ToolItemReportProps;
