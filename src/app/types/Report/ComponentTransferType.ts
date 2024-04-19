import ComponentType from "./ComponentTypes";

type ComponentTransferType = {
  type: ComponentType;
  value_field_name: string;
  [keys: string]: any;
};

export default ComponentTransferType;
