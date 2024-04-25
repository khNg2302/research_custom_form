import ReportLayout from "./ReportLayout";
import ReportItemLayoutProps from "@/app/types/Report/ReportItemLayoutProps";
import DraggableComponent from "./DraggableComponent";
import { DragEvent } from "react";

const ReportItemLayout = ({ ...props }: ReportItemLayoutProps) => {
  const { handleDrop, handleSetActiveLayoutId } = ReportLayout({ ...props });
  const { handleDragStart } = DraggableComponent({
    ...props.layoutProps,
    parentLayoutItems: props.parentLayoutItems,
  });

  const deleteLayoutFromParentLayout = () => {
    const parentLayoutHasDeleted = props.parentLayoutItems.splice(
      props.indexLayout,
      1
    );
  };

  const handleDeleteLayout = () => {
    props.handleChangeCustomReport((currentCustomReport) => {
      const deletedLayoutCustomReport = currentCustomReport;
      deleteLayoutFromParentLayout();

      delete deletedLayoutCustomReport[props.layoutId];
      return {
        ...deletedLayoutCustomReport,
      };
    });
  };

  return {
    handleDrop,
    handleDragStart,
    handleSetActiveLayoutId,
    handleDeleteLayout,
  };
};

export default ReportItemLayout;
