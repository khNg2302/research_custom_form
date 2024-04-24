import ReportLayout from "./ReportLayout";
import ReportItemLayoutProps from "@/app/types/Report/ReportItemLayoutProps";
import DraggableComponent from "./DraggableComponent";
import { DragEvent } from "react";

const ReportItemLayout = ({ ...props }: ReportItemLayoutProps) => {
  const { handleDrop, handleSetActiveLayoutId } = ReportLayout({ ...props });
  const { handleDragStart } = DraggableComponent({
    item: props.layoutProps,
    parentLayoutItems: props.parentLayoutItems,
  });

  return {
    handleDrop,
    handleDragStart,
    handleSetActiveLayoutId
  };
};

export default ReportItemLayout;
