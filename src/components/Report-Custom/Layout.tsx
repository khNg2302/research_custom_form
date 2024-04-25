import DraggableComponent from "@/app/hooks/Report/DraggableComponent";
import ReportItemLayout from "@/app/hooks/Report/ReportItemLayout";
import ReportLayoutRender from "@/app/hooks/Report/ReportLayoutRender";
import ReportItemLayoutProps from "@/app/types/Report/ReportItemLayoutProps";
import DropArea from "./DropArea";
import ToolItemReport from "./ToolItemReport";

const Layout = ({ ...props }: ReportItemLayoutProps) => {
  const {
    handleDrop,
    handleSetActiveLayoutId,
    handleDragStart,
    handleDeleteLayout,
  } = ReportItemLayout({
    ...props,
  });

  const { render } = ReportLayoutRender({ ...props });

  return (
    <div id={props.layoutId + ""} className={`flex-row report-layout`}>
      <ToolItemReport
        handleDelete={handleDeleteLayout}
        handleDragStart={handleDragStart}
      />
      {render()}
      <DropArea
        layoutId={props.layoutId}
        activeLayoutId={props.activeLayoutId}
        handleDrop={handleDrop}
        handleSetActiveLayoutId={props.handleSetActiveLayoutId}
      />
    </div>
  );
};

export default Layout;
