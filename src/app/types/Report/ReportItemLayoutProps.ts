import ItemReport from "./ItemReport";
import ReportLayoutProps from "./ReportLayoutProps";

interface ReportItemLayoutProps extends ReportLayoutProps {
  layoutProps: ItemReport;
  parentLayoutItems: Array<any>
}

export default ReportItemLayoutProps;
