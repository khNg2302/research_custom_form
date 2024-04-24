import DraggableComponent from "@/app/hooks/Report/DraggableComponent";
import ReportItemLayout from "@/app/hooks/Report/ReportItemLayout";
import ReportLayoutRender from "@/app/hooks/Report/ReportLayoutRender";
import ReportItemLayoutProps from "@/app/types/Report/ReportItemLayoutProps";

const Layout = ({ ...props }: ReportItemLayoutProps) => {
  const { handleDrop, handleSetActiveLayoutId } = ReportItemLayout({
    ...props,
  });
  const { handleDragStart } = DraggableComponent({
    item: props.layoutProps,
    parentLayoutItems: props.parentLayoutItems,
  });
  const { render } = ReportLayoutRender({ ...props });

  return (
    <div
      style={{
        minWidth: "200px",
        borderColor: props.activeLayoutId === props.layoutId ? "red" : "black",
      }}
      className="flex-row box items-center gap border"
      draggable
      onDragStart={handleDragStart}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {render()}
    </div>
  );
};

export default Layout;
