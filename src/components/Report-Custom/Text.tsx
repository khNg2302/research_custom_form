import { FC } from "react";
import ToolItemReport from "./ToolItemReport";
import DraggableComponent from "@/app/hooks/Report/DraggableComponent";
import ItemReport from "@/app/types/Report/ItemReport";
import ReportItemLayoutProps from "@/app/types/Report/ReportItemLayoutProps";

const Text: FC<ReportItemLayoutProps> = ({ ...res }) => {
  const { handleDragStart } = DraggableComponent({ ...res });
  return (
    <div className="report-text report-item">
      {/* <ToolItemReport handleDragStart={handleDragStart} /> */}
      Text: {res.layoutProps.props.content}
    </div>
  );
};

export default Text;
