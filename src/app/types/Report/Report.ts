import ImageReportItem from "./Item/ImageReportItem";
import LayoutReportItem from "./Item/LayoutReportItem";
import TextReportItem from "./Item/TextReportItem";

type Report = {
  [idLayout: number]: Array<
    TextReportItem | ImageReportItem | LayoutReportItem
  >;
};

export default Report;
