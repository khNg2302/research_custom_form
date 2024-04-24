import Group from "@/features/GroupPage/Group";
import Image from "@/components/Group/Image";
import Table from "@/components/Group/Table";
import Text from "@/components/Group/Text";

const GroupItems = {
  image: () => Image,
  text: () => Text,
  table: () => Table,
  group: () => Group,
};

export default GroupItems;
