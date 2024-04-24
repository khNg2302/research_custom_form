type ItemOfGroup = {
  uuid: string;
  [field: string]: any;
};

type RepeatedRenderHookProps<> = {
  items: ItemOfGroup[];
};

export default RepeatedRenderHookProps;
