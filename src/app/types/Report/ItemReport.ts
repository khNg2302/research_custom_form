import { ObjectField } from "../ObjectField";
import ItemReportTypes from "./ItemReportTypes";

type ItemReport = {
  uuid: string;
  layoutId:number;
  type: ItemReportTypes;
  props: ObjectField;
};

export default ItemReport;
