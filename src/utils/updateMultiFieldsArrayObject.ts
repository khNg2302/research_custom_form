import HandleUpdateMultiFieldsArrayObject from "@/app/types/HandleUpdateMultiFieldsArrayObject";

const updateMultiFieldsArrayObject = (
  list: any[],
  { values, indexObject }: HandleUpdateMultiFieldsArrayObject
) => {
  const newList = [...list];
  newList[indexObject] = {
    ...newList[indexObject],
    ...values,
  };
  return newList;
};

export default updateMultiFieldsArrayObject;
