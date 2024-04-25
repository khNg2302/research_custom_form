import { Dispatch, SetStateAction } from "react";
import { ObjectField } from "../ObjectField";
import ImageReportItem from "./Item/ImageReportItem";
import TextReportItem from "./Item/TextReportItem";
import LayoutReportItem from "./Item/LayoutReportItem";
import Report from "./Report";

type ReportLayoutProps = {
  reportValues: ObjectField;
  reportCustomState: Report;
  handleChangeCustomReport: Dispatch<SetStateAction<Report>>;
  layoutId: number;
  activeLayoutId: number | null;
  handleSetActiveLayoutId: (layoutId: number | null) => void;
  layoutItems: Array<ImageReportItem | TextReportItem | LayoutReportItem>;
};

export default ReportLayoutProps;
