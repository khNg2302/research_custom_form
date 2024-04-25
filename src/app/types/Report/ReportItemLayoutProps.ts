import ItemReport from "./ItemReport";
import ReportLayoutProps from "./ReportLayoutProps";

interface ReportItemLayoutProps extends ReportLayoutProps {
  layoutProps: ItemReport;
  indexLayout: number;
  parentLayoutItems: Array<any>;
}

export default ReportItemLayoutProps;
