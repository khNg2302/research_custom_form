import ImageReportItem from "@/app/types/Report/Item/ImageReportItem";
import LayoutReportItem from "@/app/types/Report/Item/LayoutReportItem";
import TextReportItem from "@/app/types/Report/Item/TextReportItem";
import ItemReport from "@/app/types/Report/ItemReport";
import Report from "@/app/types/Report/Report";
import ReportLayoutProps from "@/app/types/Report/ReportLayoutProps";
import deleteArrayObject from "@/utils/deleteArrayObject";
import returnNewArray from "@/utils/returnNewArray";
import { DragEvent } from "react";

let uuid = Math.random() * 10;
let idLayout = Math.random() * 10;

interface ItemExchange extends ItemReport {
  parentLayoutItems: Array<ImageReportItem | TextReportItem | LayoutReportItem>;
}
const ReportLayout = ({
  reportValues,
  handleChangeCustomReport,
  layoutId,
  activeLayoutId,
  handleSetActiveLayoutId,
  layoutItems,
}: ReportLayoutProps) => {
  const dropItemFormOtherLayout = (item: ItemReport) => {
    if (!item.layoutId) return false;

    return true;
  };

  const defineNewItem = (itemTrans: ItemReport) => {
    console.log(idLayout);
    const newItemProps: ItemReport = {
      ...itemTrans,
      uuid: uuid++ + "u",
      layoutId,
    };

    if (itemTrans.type === "layout") {
      newItemProps.props = {
        id: idLayout++,
        parentId: layoutId,
      };
    }
    return newItemProps;
  };

  const newLayoutItems = (item: ItemReport) => {
    const newItemTrans = defineNewItem(item);
    const newItem = {
      [layoutId]: returnNewArray(layoutItems, newItemTrans),
    };

    if (item.type === "layout") {
      newItem[newItemTrans.props.id as number] = [];
    }
    return newItem;
  };

  const deletedExchangedItemAtOldLayout = (item: ItemExchange) => {
    return {
      [item.layoutId]: deleteArrayObject({
        array: item.parentLayoutItems,
        itemUuid: item.uuid,
      }),
    };
  };

  const addItemExchangedToActiveLayout = (
    item: ItemExchange,
    currentCustomReport: Report
  ) => {
    return {
      [activeLayoutId as number]: returnNewArray(
        currentCustomReport[activeLayoutId as number],
        { ...item, layoutId: activeLayoutId }
      ),
    };
  };

  const exChangeItem = (item: ItemExchange) => {
    handleChangeCustomReport((currentLayout) => ({
      ...currentLayout,
      ...addItemExchangedToActiveLayout(item, currentLayout),
      ...deletedExchangedItemAtOldLayout(item),
    }));
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    if (activeLayoutId !== layoutId) return;
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("item"));

    if (dropItemFormOtherLayout(item)) {
      if (activeLayoutId === item.layoutId || activeLayoutId === item.props.id)
        return;
      exChangeItem(item);
      return;
    }

    handleChangeCustomReport((currentLayout) => ({
      ...currentLayout,
      ...newLayoutItems(item),
    }));
    handleSetActiveLayoutId(null);
  };

  return {
    handleDrop,
    handleSetActiveLayoutId,
  };
};

export default ReportLayout;
