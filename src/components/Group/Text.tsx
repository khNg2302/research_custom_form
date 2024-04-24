import { FC } from "react";
import TextItem from "@/app/types/Group/Items/TextItem";

const Text:FC<TextItem> = ({content}) => {
  return <h5>Text: {content}</h5>;
};

export default Text;
