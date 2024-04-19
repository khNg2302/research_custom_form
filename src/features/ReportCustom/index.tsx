import DropList from "@/components/Report-Custom/DropList";
import PanelItemSelection from "./PanelItemSelection";

const ReportCustom = () => {
  const values = {
    name:'Name',
    price: 0
  };

  return (
    <div>
      <DropList values={values}></DropList>
      <PanelItemSelection />
    </div>
  );
};

export default ReportCustom;
