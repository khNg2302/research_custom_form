import ToolItemReportProps from "@/app/types/Report/ToolItemReport";
import Button from "../Button";

const ToolItemReport = ({
  handleDelete,
  handleDragStart,
}: ToolItemReportProps) => {
  return (
    <>
      <div className="report-tool flex-row gap">
        <div draggable onDragStart={handleDragStart}>
          +
        </div>
        <Button label="X" onClick={handleDelete} />
      </div>
    </>
  );
};

export default ToolItemReport;
