import GroupItemTypes from "./GroupItemTypes";
import GroupItem from "./Items/GroupItem";
import ImageItem from "./Items/ImageItem";
import TableItem from "./Items/TableItem/TableItem";
import TextItem from "./Items/TextItem";

type ItemOfGroup = {
  uuid: string;
  type: GroupItemTypes;
  props: TextItem | ImageItem | TableItem | GroupItem;
};

export default ItemOfGroup;
