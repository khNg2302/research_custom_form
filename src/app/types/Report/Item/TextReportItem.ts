import ItemReport from "../ItemReport";

interface TextReportItem extends ItemReport {
  props: {
    content: string;
  };
}

export default TextReportItem;
