import { ObjectField } from "@/app/types/ObjectField";
const deleteArrayObject = ({
  array,
  itemUuid,
}: {
  array: Array<any>;
  itemUuid: string;
}) => {
  return array.filter((item) => item.uuid !== itemUuid);
};

export default deleteArrayObject;
