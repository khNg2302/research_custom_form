import ItemReport from "../ItemReport";

interface LayoutReportItem extends ItemReport {
  props: {
    parentId?: number;
    id: number;
  };
}

export default LayoutReportItem;
