import HandleChangeArrayObjectProps from "@/app/types/HandeChangeArrayObjectProps";

const updateArrayObject = (
  list: any[],
  { name, value, indexObject }: HandleChangeArrayObjectProps
) => {
  const newList = [...list];
  newList[indexObject] = {
    ...newList[indexObject],
    [name]: value,
  };
  return newList;
};

export default updateArrayObject;
