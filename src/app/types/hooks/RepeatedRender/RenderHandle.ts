import { FC, ReactNode } from "react";

type MapComp = {
  [type: string]: () => FC<any>;
};

type RenderHandle = {
  itemTypePropertyName: string;
  itemPropsPropertyName: string;
  itemComponentSelection: MapComp;
};

export default RenderHandle;
